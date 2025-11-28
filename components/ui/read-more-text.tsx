// components/ui/read-more-text.tsx
"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ReadMoreTextProps {
  // The full text content to display
  children: React.ReactNode; 
  // The maximum number of characters to show before truncation
  maxLength?: number; 
  // Custom class for the surrounding text container
  className?: string;
}

export function ReadMoreText({ children, maxLength = 350, className = "" }: ReadMoreTextProps) {
  // Children must be a string for truncation to work easily
  const text = children as string;
  
  // State to manage whether the full text is shown
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Determine if content needs truncating (i.e., it's longer than maxLength)
  const needsTruncation = text.length > maxLength;
  
  // Get the truncated text
  const truncatedText = needsTruncation 
    ? text.substring(0, maxLength) + '...' 
    : text;
    
  // Text content to display
  const content = needsTruncation && !isExpanded ? truncatedText : text;
  
  // Line break helper function (converts single \n to <br/>)
  const renderContent = (text: string) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Puts content in a paragraph with the readability styles */}
      <p className="text-lg text-foreground/80 leading-relaxed transition-all duration-500">
        {renderContent(content)}
      </p>

      {/* Show button only if text was actually truncated */}
      {needsTruncation && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center gap-2 text-accent font-semibold hover:opacity-80 transition-opacity"
        >
          {isExpanded ? (
            <>
              Read Less <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Read More <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
}