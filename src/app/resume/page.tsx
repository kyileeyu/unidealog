import { ResumePage } from '@/features/resume';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이력서 | 유승현',
  description:
    '4년차 프론트엔드 개발자 유승현의 이력서입니다. React, TypeScript 기반 B2B SaaS 경험.',
};

export default function Resume() {
  return <ResumePage />;
}
