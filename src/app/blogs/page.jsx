import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with JavaScript in 2026",
      slug: "getting-started-with-javascript-2026",
      author: {
        name: "Ava Thompson",
        avatar: "https://example.com/images/authors/ava-thompson.jpg",
      },
      category: "Programming",
      tags: ["JavaScript", "Web Development", "Beginner"],
      publishedAt: "2026-04-10T09:30:00Z",
      readTime: "6 min read",
      featuredImage: "https://example.com/images/blogs/javascript-2026.jpg",
      excerpt:
        "A beginner-friendly guide to learning modern JavaScript and building interactive web applications in 2026.",
      content:
        "JavaScript remains one of the most popular programming languages for web development. In this guide, we explore the basics of variables, functions, DOM manipulation, and ES2026 features to help beginners start building modern web applications.",
      views: 1842,
      likes: 326,
      commentsCount: 18,
      isFeatured: true,
    },
    {
      id: 2,
      title: "Top 10 UI Design Trends You Should Know",
      slug: "top-10-ui-design-trends-2026",
      author: {
        name: "Liam Carter",
        avatar: "https://example.com/images/authors/liam-carter.jpg",
      },
      category: "Design",
      tags: ["UI", "UX", "Design Trends"],
      publishedAt: "2026-03-28T14:15:00Z",
      readTime: "8 min read",
      featuredImage: "https://example.com/images/blogs/ui-design-trends.jpg",
      excerpt:
        "Explore the latest UI design trends shaping digital products in 2026, from glassmorphism to AI-assisted interfaces.",
      content:
        "UI design in 2026 is evolving rapidly with cleaner interfaces, immersive 3D elements, accessible color systems, and AI-powered personalization. This article highlights the trends designers should embrace to stay ahead.",
      views: 2594,
      likes: 487,
      commentsCount: 24,
      isFeatured: true,
    },
    {
      id: 3,
      title: "How to Stay Productive While Working Remotely",
      slug: "stay-productive-working-remotely",
      author: {
        name: "Sophia Nguyen",
        avatar: "https://example.com/images/authors/sophia-nguyen.jpg",
      },
      category: "Productivity",
      tags: ["Remote Work", "Productivity", "Work Life"],
      publishedAt: "2026-04-01T08:00:00Z",
      readTime: "5 min read",
      featuredImage:
        "https://example.com/images/blogs/remote-work-productivity.jpg",
      excerpt:
        "Practical strategies to stay focused, organized, and productive while working from home or anywhere.",
      content:
        "Remote work offers flexibility, but it also comes with distractions. Learn how to build a productive workspace, manage your time effectively, and maintain work-life balance with proven remote work habits.",
      views: 1430,
      likes: 278,
      commentsCount: 12,
      isFeatured: false,
    },
    {
      id: 4,
      title: "A Complete Guide to Healthy Eating",
      slug: "complete-guide-to-healthy-eating",
      author: {
        name: "Noah Patel",
        avatar: "https://example.com/images/authors/noah-patel.jpg",
      },
      category: "Health",
      tags: ["Nutrition", "Healthy Lifestyle", "Wellness"],
      publishedAt: "2026-02-19T11:45:00Z",
      readTime: "7 min read",
      featuredImage: "https://example.com/images/blogs/healthy-eating.jpg",
      excerpt:
        "Learn the fundamentals of balanced nutrition and how to make healthier food choices every day.",
      content:
        "Healthy eating is about balance, consistency, and understanding what your body needs. This guide covers macronutrients, meal planning, hydration, and sustainable habits for long-term wellness.",
      views: 1987,
      likes: 351,
      commentsCount: 20,
      isFeatured: false,
    },
    {
      id: 5,
      title: "Why Learning AI Basics Matters Today",
      slug: "why-learning-ai-basics-matters",
      author: {
        name: "Emma Rodriguez",
        avatar: "https://example.com/images/authors/emma-rodriguez.jpg",
      },
      category: "Technology",
      tags: ["AI", "Machine Learning", "Future Tech"],
      publishedAt: "2026-04-20T16:20:00Z",
      readTime: "9 min read",
      featuredImage: "https://example.com/images/blogs/ai-basics.jpg",
      excerpt:
        "Artificial Intelligence is shaping every industry. Here's why understanding the basics is more important than ever.",
      content:
        "AI is no longer limited to research labs. From chatbots to healthcare and automation, AI is transforming how we work and live. This article explains key AI concepts and why learning them is valuable today.",
      views: 3125,
      likes: 590,
      commentsCount: 31,
      isFeatured: true,
    },
  ];
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#f07f23]">
        This is the Blogs Page
      </h2>
      {blogs.map((blog, ind) => (
        <div key={ind} className="border rounded-2xl p-4 my-4">
          <h3 className="text-xl font-semibold">{blog.title}</h3>
          <Link href={`/blogs/${blog.id}`} className="btn mt-4">
            Show details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
