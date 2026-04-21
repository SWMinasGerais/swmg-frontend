/**
 * Testimonials module type definitions
 */

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  imageUrl: string;
  rating?: number;
} 