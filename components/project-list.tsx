'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Package } from 'lucide-react';
import { projectsApi, Project } from '@/lib/api';
import { ScrollReveal } from './ui/animations';

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await projectsApi.getProjects();
        setProjects(Array.isArray(data) ? data : []);
        setError(null);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">No projects found.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-2">
      {projects.map((project) => (
        <ScrollReveal key={project.id}>
          <Card className="flex flex-col overflow-hidden shadow-xl rounded-xl border-0">
            <div className="relative h-64 w-full">
              <Image
                src={project.photoUrl || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            
            <CardHeader className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-6">
              <CardTitle className="text-2xl">{project.title}</CardTitle>
              <CardDescription className="text-blue-100">
                <div className="flex items-center gap-2 mt-2">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>
              </CardDescription>
            </CardHeader>

            <CardContent className="p-6 space-y-6 bg-white">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <Package className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm text-blue-950">Items Supplied</h3>
                    <ul className="mt-2 space-y-1">
                      {project.itemsSupplied.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {project.brands && project.brands.length > 0 && (
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-blue-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 2H8C6.34315 2 5 3.34315 5 5V19C5 20.6569 6.34315 22 8 22H16C17.6569 22 19 20.6569 19 19V5C19 3.34315 17.6569 2 16 2Z" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 6H14.5M12 12H14.5M12 18H14.5M9.5 6V6.01M9.5 12V12.01M9.5 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-blue-950">Brands</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.brands.map((brand, index) => (
                          <span 
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      ))}
    </div>
  );
} 