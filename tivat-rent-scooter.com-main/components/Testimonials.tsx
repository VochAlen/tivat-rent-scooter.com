"use client";

import React, { useEffect, useRef, useState } from "react";
import { getTranslations } from "@/lib/i18n";
import { useLanguage } from "@/components/language-provider";
import { supabase } from "@/lib/supabase";
import { toast } from "react-hot-toast";

// Mock data for testimonials with names from Serbia, Tel Aviv, and Moscow
const testimonials = [
  {
    name: "Иван Петровић",
    role: "Tourist from Serbia",
    content: "Renting a scooter was a breeze! The service was excellent and the scooter was in perfect condition.",
  },
  {
    name: "דוד לוי",
    role: "Tourist from Israel",
    content: "Exploring Tivat on a scooter was an amazing experience. Highly recommend their services!",
  },
  {
    name: "Алексей Смирнов",
    role: "Vacationer from Moscow",
    content: "The team was very helpful and the scooter rental process was smooth and hassle-free.",
  },
  {
    name: "Милена Јовановић",
    role: "Adventure Seeker from Serbia",
    content: "Great prices and excellent customer service. Will definitely rent again!",
  },
  {
    name: "Роман Кузнецов",
    role: "Backpacker from Moscow",
    content: "The scooter made my trip around Montenegro unforgettable. Easy to rent and great support.",
  },
  {
    name: "Sara Koen",
    role: "Backpacker from Tel Aviv",
    content: "Perfect way to get around and capture the beauty of Montenegro. The scooter was reliable and fun!",
  },
];

interface UserTestimonial {
  id: string;
  name: string;
  email: string;
  role: string;
  content: string;
  is_verified: boolean;
  created_at: string;
}

interface CommentFormData {
  name: string;
  email: string;
  role: string;
  content: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  isUserGenerated?: boolean;
}

export default function Testimonials({ lang }: { lang: string }) {
  const { dir } = useLanguage();
  const t = getTranslations(lang);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  // State for user testimonials and form
  const [userTestimonials, setUserTestimonials] = useState<UserTestimonial[]>([]);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<CommentFormData>({
    name: '',
    email: '',
    role: '',
    content: ''
  });

  // Fetch verified user testimonials
  useEffect(() => {
    fetchUserTestimonials();
  }, []);

  const fetchUserTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_verified', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setUserTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Insert testimonial with is_verified = false
      const { data, error } = await supabase
        .from('testimonials')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            role: formData.role,
            content: formData.content,
            is_verified: false
          }
        ])
        .select()
        .single();

      if (error) throw error;

      // Send verification email
      await sendVerificationEmail(data.id, formData.email, formData.name);

      toast.success(t.testimonialSubmitted || 'Thank you! Please check your email to verify your testimonial.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        role: '',
        content: ''
      });
      setShowCommentForm(false);

    } catch (error) {
      console.error('Error submitting testimonial:', error);
      toast.error(t.testimonialError || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendVerificationEmail = async (testimonialId: string, email: string, name: string) => {
    // This would typically be handled by a serverless function or API route
    // For now, we'll use Supabase Edge Functions or a custom API endpoint
    const verificationUrl = `${window.location.origin}/api/verify-testimonial?id=${testimonialId}&email=${encodeURIComponent(email)}`;

    // Call your email service (SendGrid, Resend, etc.)
    await fetch('/api/send-verification-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        name,
        verificationUrl
      })
    });
  };

  // Animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const testimonialElements = document.querySelectorAll(".testimonial-card");
    testimonialElements.forEach((el) => observer.observe(el));

    return () => {
      testimonialElements.forEach((el) => observer.unobserve(el));
    };
  }, [userTestimonials]);

  // Combine testimonials
  const allTestimonials: Testimonial[] = [
    ...testimonials,
    ...userTestimonials.map(ut => ({
      name: ut.name,
      role: ut.role,
      content: ut.content,
      isUserGenerated: true
    }))
  ];

  const renderVerifiedBadge = (testimonial: Testimonial): React.ReactNode => {
    if ('isUserGenerated' in testimonial && testimonial.isUserGenerated) {
      return (
        <div className="absolute top-4 right-4">
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
            {t.verified || "Verified"}
          </span>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            {t.testimonialsTitle || "What Our Customers Say"}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {t.testimonialsDescription || "Read what our customers have to say about their experience with us."}
          </p>

          {/* Add Comment Button */}
          <button
            onClick={() => setShowCommentForm(!showCommentForm)}
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {showCommentForm ? t.cancelComment : t.shareExperience}
          </button>
        </div>

        {/* Comment Form */}
        {showCommentForm && (
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                {t.shareYourStory}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t.fullName} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                      placeholder={t.enterName}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t.email} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                      placeholder={t.enterEmail}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.role} *
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    placeholder={t.enterRole}
                  />
                </div>
                <div>
                  <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.testimonial} *
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent dark:bg-gray-800 dark:text-white resize-none"
                    placeholder={t.shareExperienceText}
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-orange-500 to-pink-500 hover:shadow-lg transform hover:scale-105'
                    }`}
                  >
                    {isSubmitting ? t.submitting : t.submitTestimonial}
                  </button>
                </div>
              </form>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                {t.verificationNote}
              </p>
            </div>
          </div>
        )}

        {/* Testimonials Grid */}
        <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 100 + 100}ms` }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden h-full p-6 relative">
                {renderVerifiedBadge(testimonial)}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}