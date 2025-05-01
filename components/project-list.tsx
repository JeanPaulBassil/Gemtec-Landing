'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Package } from 'lucide-react';
import { ScrollReveal } from './ui/animations';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Project, useProjects } from '@/hooks/use-projects';

export default function ProjectList() {
  const [searchQuery, setSearchQuery] = useState('');
  const { projects, loading, error } = useProjects({ search: searchQuery });

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
        <h3 className="text-xl font-semibold mb-2 text-red-600">Error loading projects</h3>
        <p className="text-muted-foreground">Please try again later</p>
      </div>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-xl font-semibold mb-2">No projects found</h3>
        <p className="text-muted-foreground">Try adjusting your search</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            className="pl-9"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-2">
        {projects.map((project: Project) => (
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

              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-700">Items Supplied:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.itemsSupplied.map((item: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-700">Brands:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.brands.map((brand: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
} 