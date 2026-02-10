# Architecture

This document describes the high-level architecture and structure of the frontend application.

## Overview

The project is a single-page frontend application built with a modern JavaScript toolchain. It follows a component-based architecture with a clear separation between application structure, reusable UI components, and static assets.

## Technology Stack

- Vite for development server and build pipeline
- React for component composition and rendering
- Tailwind CSS for styling
- PostCSS for CSS processing

## Folder Structure

The project follows this structure:

src/
- assets/  
  Contains static resources such as images and logos.

- components/  
  Contains reusable React components and page sections.
  - ui/  
    Shared UI components that are generic and reusable across the application.

- App.jsx  
  Defines the main application layout and composes top-level components.

- main.jsx  
  Entry point of the application. Responsible for bootstrapping React and mounting the app.

## Architectural Principles

- Components are kept small and focused
- Reusable UI elements are separated from page-specific components
- No business logic is coupled directly to styling
- Configuration is handled outside of application logic

This structure is designed to remain maintainable and scalable as the project grows.
