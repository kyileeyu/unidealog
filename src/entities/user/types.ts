export interface User {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  bio?: UserBio;
  social?: UserSocial;
}

export interface UserBio {
  description: string[];
  thumbnail?: string;
  location?: string;
  website?: string;
}

export interface UserSocial {
  github?: string;
  twitter?: string;
  linkedin?: string;
  email?: string;
  website?: string;
}

export interface UserProfile extends User {
  postCount: number;
  joinDate: string;
  lastActiveDate: string;
}
