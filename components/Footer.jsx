"use client";

import React from "react";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { INSURANCE_LIVE } from "@/data/featureFlags";

export default function Footer() {
  return (
    <footer className="bg-[#001F2B] text-white pt-14 md:pt-10   ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-8 mb-10">
          {/* Column 1: Brand & Social */}
          <div className="space-y-6 lg:col-span-4">
            <div className="flex items-center gap-2 ">
              {/* Using text logo for now, or Image if available */}
              <span className="text-3xl font-medium font-serif text-white">
                Fin<span className="text-[#DAA434]">Ask</span>
              </span>
            </div>
            <p className="text-gray-400 -mt-4 text-md leading-relaxed max-w-xs">
              Adding Value to Every Financial Step.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                {
                  icon: Facebook,
                  link: "https://www.facebook.com/finaskvalue/",
                },
                {
                  icon: Instagram,
                  link: "https://www.instagram.com/finask_value/",
                },
                {
                  icon: Linkedin,
                  link: "https://www.linkedin.com/company/finask-value/?viewAsMember=true",
                },
              ].map(({ icon: Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#DAA434] transition-colors duration-300 group"
                >
                  <Icon
                    size={18}
                    className="text-gray-400 group-hover:text-white transition-colors"
                  />
                </a>
              ))}
            </div>

            {/* Licenses & Registrations */}
            <div className="pt-2">
              <div className="space-y-2 text-sm text-gray-400">
                <p>
                  <span className="text-white font-medium">ARN Code:</span>{" "}
                  ARN-306001
                </p>
                <p>
                  <span className="text-white font-medium">ARN Validity:</span>{" "}
                  25th August 2027
                </p>
                <p>
                  <span className="text-white font-medium">ARPN Code:</span>{" "}
                  ARPN09216
                </p>
                <p>
                  <span className="text-white font-medium">ARPN Validity:</span>{" "}
                  25th May 2029
                </p>
                <p>
                  <span className="text-white font-medium">CIN:</span>{" "}
                  U67190DL2020PTC375119
                </p>
                {/* <p>
                  <span className="text-white font-medium">
                    BSE Authorised Person:
                  </span>{" "}
                  U67190DL2020PTC375119
                </p>
                <p>
                  <span className="text-white font-medium">
                    NSE Authorised Person:
                  </span>{" "}
                  AP3086049783
                </p> */}
              </div>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-2">Links</h3>
            <div className="flex gap-2 mb-8">
              <div className="w-12 h-1 bg-white/20 rounded-full"></div>
              <div className="w-4 h-1 bg-white/20 rounded-full"></div>
            </div>

            <ul className="space-y-4 text-md text-gray-400">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "Careers", href: "/careers" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-[#DAA434] transition-colors flex items-center gap-2"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Company */}
          <div className="lg:col-span-2 lg:-ml-[50px]">
            <h3 className="text-lg font-bold mb-2">Our Company</h3>
            <div className="flex gap-2 mb-8">
              <div className="w-12 h-1 bg-white/20 rounded-full"></div>
              <div className="w-4 h-1 bg-white/20 rounded-full"></div>
            </div>
            <ul className="space-y-4 text-md text-gray-400">
              {[
                { label: "Investments", href: "/investments" },
                 { label: "Services", href: "/services" },
                  ...(INSURANCE_LIVE
                    ? [{ label: "Insurance", href: "/insurances" }]
                    : []),
                { label: "Family Office", href: "/services/family-office" },
                { label: "NRI's Corner", href: "/services/nri-corner" },
                { label: "Women's Corner", href: "/services/women-corner" },
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-[#DAA434] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

           <div className="lg:col-span-2 ">
            <h3 className="text-lg font-bold mb-2">Resources</h3>
            <div className="flex gap-2 mb-8">
              <div className="w-12 h-1 bg-white/20 rounded-full"></div>
              <div className="w-4 h-1 bg-white/20 rounded-full"></div>
            </div>
            <ul className="space-y-4 text-md text-gray-400">
              {[
                { label: "Awards", href: "/about#awards" },
                 { label: "Blogs", href: "/blog" },
                  { label: "Testimonials", href: "/#testimonials" },
              
              ].map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-[#DAA434] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Escalation Matrix - Minimalist Bar */}

        {/* Copyright */}
        <div className="border-t border-white/10 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>
            Copyright © {new Date().getFullYear()} Rainbow-Themes. All Rights
            Reserved
          </p>{" "}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
            <a href="/level" className="hover:text-white transition-colors">
              Escalation Matrices
            </a>
            <a
              href="/disclaimer"
              className="hover:text-white transition-colors"
            >
              Disclaimer
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms and Conditions
            </a>
            <a
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
