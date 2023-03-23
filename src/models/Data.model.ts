export interface TimelineData {
  year: number | string;
  name: string;
  description: string[];
}

export interface Award {
  name: string;
  description: string[];
}

export interface Project {
  name: string;
  tag: string[];
  image: string;
  year: number;
  description: string;
  role: string;
  filter: string[];
}

export interface Pathbar {
  title: string;
  path: string;
}

export interface Blogslink {
  title: string;
  image: string;
  year: string;
  path: string;
  description: string;
  from: string;
}
