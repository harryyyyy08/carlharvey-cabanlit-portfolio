'use client';

import React, { useState } from 'react';
import { ExternalLink, Github, Play, X } from 'lucide-react';
import { projects } from '@/data/content';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const openProjectModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and accomplishments
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              onClick={() => openProjectModal(project)}
            >
              {/* Project Image */}
              <div className="h-48 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🚀</div>
                    <p className="text-gray-500 text-sm">Project Screenshot</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-medium">Client:</span> {project.clientName}
                </p>
                
                <p className="text-gray-700 mb-4 line-clamp-2">
                  {project.shortDescription}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech.name}
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech.name}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                {/* Business Impact */}
                <div className="bg-green-50 p-3 rounded-md">
                  <p className="text-sm text-green-800">
                    <span className="font-medium">Impact:</span> {project.businessImpact}
                  </p>
                </div>
                
                {/* Action Buttons */}
                <div className="mt-4 flex gap-2">
                  {project.liveDemoLink && (
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {project.githubRepoLink && (
                    <a
                      href={project.githubRepoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-700 text-sm font-medium"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-900">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-6">
                {/* Project Image */}
                <div className="h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🚀</div>
                    <p className="text-gray-500">Project Screenshot</p>
                  </div>
                </div>
                
                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Client Information</h4>
                    <p className="text-gray-700">
                      <span className="font-medium">Name:</span> {selectedProject.clientName}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Type:</span> {selectedProject.clientType}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Completed:</span> {selectedProject.dateCompleted}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Business Impact</h4>
                    <p className="text-gray-700">{selectedProject.businessImpact}</p>
                  </div>
                </div>
                
                {/* Detailed Description */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Project Overview</h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedProject.detailedDescription}
                  </p>
                </div>
                
                {/* Technologies Used */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <div key={tech.name} className="bg-gray-50 p-3 rounded-md">
                        <div className="font-medium text-gray-900">{tech.name}</div>
                        <div className="text-sm text-gray-600">{tech.type}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Action Links */}
                <div className="flex gap-4">
                  {selectedProject.liveDemoLink && (
                    <a
                      href={selectedProject.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Demo
                    </a>
                  )}
                  {selectedProject.githubRepoLink && (
                    <a
                      href={selectedProject.githubRepoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-900 transition-colors inline-flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
