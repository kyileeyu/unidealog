import { ResumePageOne } from './ResumePageOne';
import { ResumePageTwo } from './ResumePageTwo';

export function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-[48px] print:bg-white print:py-0 overflow-x-auto">
      <div className="flex flex-col items-center gap-[40px] print:gap-0">
        {/* Page 1 */}
        <div className="shadow-lg print:shadow-none resume-page-break">
          <ResumePageOne />
        </div>

        {/* Page 2 */}
        <div className="shadow-lg print:shadow-none">
          <ResumePageTwo />
        </div>
      </div>
    </div>
  );
}
