/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  AlertTriangle,
  Check,
  CheckCircle2,
  Copy,
  Printer,
} from 'lucide-react';
import {
  ASSUMPTIONS_LIMITATIONS,
  CANDIDATE_INFO,
  EXECUTIVE_SUMMARY,
  FINDINGS,
  MOST_SERIOUS_ANALYSIS,
  ORDERS_DATA,
  REVENUE_CALCULATION,
  TASK_3A_EMAIL,
  TASK_3B_BUG_REPORT,
} from './data/assignmentData';

export default function App() {
  const [filterView, setFilterView] = useState<'all' | 'critical'>('all');
  const [emailCopied, setEmailCopied] = useState(false);
  const [bugCopied, setBugCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(TASK_3A_EMAIL.rawText);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleCopyBug = () => {
    navigator.clipboard.writeText(TASK_3B_BUG_REPORT.rawText);
    setBugCopied(true);
    setTimeout(() => setBugCopied(false), 2000);
  };

  const filteredFindings =
    filterView === 'critical' ? FINDINGS.filter((f) => f.isMostSerious) : FINDINGS;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col antialiased">
      {/* 1. TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Zone 1: Brand Title */}
          <a
            href="#"
            className="text-base sm:text-lg font-bold tracking-tight text-slate-900 hover:text-slate-700 transition-colors whitespace-nowrap"
          >
            Phyllo · Take-Home Assignment
          </a>

          {/* Zone 2: Nav Links for the Three Tasks */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#summary" className="hover:text-slate-900 transition-colors">
              Summary
            </a>
            <a href="#task-1" className="hover:text-slate-900 transition-colors">
              Task 1
            </a>
            <a href="#task-2" className="hover:text-slate-900 transition-colors">
              Task 2
            </a>
            <a href="#task-3a" className="hover:text-slate-900 transition-colors">
              Task 3A
            </a>
            <a href="#task-3b" className="hover:text-slate-900 transition-colors">
              Task 3B
            </a>
            <a href="#assumptions" className="hover:text-slate-900 transition-colors">
              Assumption
            </a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => window.print()}
              title="Print to PDF"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-md hover:bg-slate-100 hover:text-slate-900 transition-colors whitespace-nowrap shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
          </div>
        </div>
      </header>

      {/* HEADER / CANDIDATE IDENTITY */}
      <section className="bg-white border-b border-slate-200 py-8 sm:py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-wider text-blue-700 uppercase mb-2">
              Take-Home Assignment
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-4">
              {CANDIDATE_INFO.projectTitle}
            </h1>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
              <div>
                <span className="text-slate-500">Candidate:</span>{' '}
                <strong className="text-slate-900 font-semibold">{CANDIDATE_INFO.candidateName}</strong>
              </div>
              <span className="text-slate-400" aria-hidden="true">·</span>
              <div>
                <span className="text-slate-500">Company:</span>{' '}
                <strong className="text-slate-900 font-semibold">{CANDIDATE_INFO.company}</strong>
              </div>
              <span className="text-slate-400" aria-hidden="true">·</span>
              <div>
                <span className="text-slate-500">Role:</span>{' '}
                <strong className="text-slate-900 font-semibold">{CANDIDATE_INFO.role}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 sm:space-y-12 w-full">

        {/* 1. EXECUTIVE SUMMARY */}
        <section id="summary" className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
          <div className="border-b border-slate-200 pb-4 mb-6">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">1. Executive Summary</h2>
          </div>

          <p className="text-base text-slate-800 leading-relaxed mb-6">
            {EXECUTIVE_SUMMARY.overview}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {EXECUTIVE_SUMMARY.tasks.map((task, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-md p-4 flex flex-col justify-start"
              >
                <div className="text-xs font-bold text-blue-700 uppercase tracking-wider mb-1">
                  {task.number}
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1.5">{task.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{task.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 2. TASK 1 – WHAT DOESN'T MATCH? */}
        <section id="task-1" className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 mb-6 gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                2. Task 1 – What Doesn't Match?
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Comparison of documented API contracts against captured responses
              </p>
            </div>

            {/* Filter Toggle */}
            <div className="inline-flex items-center p-1 bg-slate-100 rounded-md shrink-0">
              <button
                onClick={() => setFilterView('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                  filterView === 'all'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Findings
              </button>
              <button
                onClick={() => setFilterView('critical')}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                  filterView === 'critical'
                    ? 'bg-amber-100 text-amber-900 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Most Serious Issue Only
              </button>
            </div>
          </div>

          {/* MOST SERIOUS ISSUE VISUAL NOTICE */}
          <div className="mb-6 p-4 rounded-md border border-amber-300 bg-amber-50">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold tracking-wider text-amber-800 uppercase mb-1">
                  Most Serious Issue
                </div>
                <div className="text-sm font-semibold text-amber-950 mb-0.5">
                  {MOST_SERIOUS_ANALYSIS.findingTitle}
                </div>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                  {MOST_SERIOUS_ANALYSIS.statement}
                </p>
              </div>
            </div>
          </div>

          {/* FINDINGS TABLE */}
          <div className="overflow-x-auto border border-slate-200 rounded-md">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-semibold text-xs tracking-wider uppercase">
                  <th className="py-3 px-4 w-44">Finding</th>
                  <th className="py-3 px-4 w-60">Documentation</th>
                  <th className="py-3 px-4 w-72">Actual</th>
                  <th className="py-3 px-4">Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {filteredFindings.map((finding) => (
                  <tr
                    key={finding.id}
                    className={`transition-colors ${
                      finding.isMostSerious
                        ? 'bg-amber-50/60 hover:bg-amber-50/90'
                        : 'hover:bg-slate-50/60'
                    }`}
                  >
                    <td className="py-3.5 px-4 align-top">
                      <div className="font-semibold text-slate-900">
                        Finding {finding.letter} – {finding.title}
                      </div>
                      {finding.isMostSerious && (
                        <div className="mt-1.5 text-xs font-semibold text-amber-800 inline-flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5" />
                          <span>Most serious issue</span>
                        </div>
                      )}
                    </td>

                    <td className="py-3.5 px-4 align-top text-slate-700 leading-relaxed text-xs sm:text-sm">
                      {finding.documented}
                    </td>

                    <td className="py-3.5 px-4 align-top">
                      <div className="font-mono text-xs text-slate-800 bg-slate-100 border border-slate-200 rounded p-2.5 whitespace-pre-line break-words">
                        {finding.actual}
                      </div>
                    </td>

                    <td className="py-3.5 px-4 align-top leading-relaxed text-xs sm:text-sm text-slate-700">
                      {finding.impact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. TASK 2 – WHAT'S THE TOTAL REVENUE? */}
        <section id="task-2" className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
          <div className="border-b border-slate-200 pb-4 mb-6">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              3. Task 2 – Total Revenue
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Order calculation and treatment of refunded records
            </p>
          </div>

          {/* CALCULATION SUMMARY */}
          <div className="bg-slate-50 border border-slate-200 rounded-md p-5 mb-6">
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Calculation
            </div>
            <div className="font-mono text-sm sm:text-base font-semibold text-slate-900 bg-white border border-slate-200 rounded px-3.5 py-2.5 mb-3">
              {REVENUE_CALCULATION.formula}
            </div>
            <div className="text-base sm:text-lg font-bold text-slate-900">
              {REVENUE_CALCULATION.calculatedRevenueText}
            </div>
          </div>

          {/* ORDERS TABLE WITH EXACT STATUSES */}
          <div className="overflow-x-auto border border-slate-200 rounded-md mb-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-semibold text-xs tracking-wider uppercase">
                  <th className="py-3 px-4">Order ID</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Amount</th>
                  <th className="py-3 px-4">Treatment</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-xs sm:text-sm">
                {ORDERS_DATA.map((order) => (
                  <tr
                    key={order.id}
                    className={`transition-colors ${
                      order.includedInRevenue ? 'hover:bg-slate-50/60' : 'bg-slate-50/80 hover:bg-slate-100/60'
                    }`}
                  >
                    <td className="py-3 px-4 font-mono font-medium text-slate-900">{order.id}</td>
                    <td className="py-3 px-4">
                      <span
                        className={
                          order.status === 'refunded'
                            ? 'text-amber-800 font-semibold'
                            : 'text-slate-700'
                        }
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right font-mono text-slate-900 tabular-nums">
                      {order.formattedAmount}
                    </td>
                    <td className="py-3 px-4">
                      {order.includedInRevenue ? (
                        <span className="text-slate-700 inline-flex items-center gap-1">
                          <Check className="w-3.5 h-3.5 text-slate-500" />
                          {order.treatment}
                        </span>
                      ) : (
                        <span className="text-slate-600 font-medium">
                          {order.treatment}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ASSUMPTION */}
          <div className="bg-slate-50 border border-slate-200 rounded-md p-4">
            <p className="text-sm text-slate-800 leading-relaxed">
              {REVENUE_CALCULATION.assumption}
            </p>
          </div>
        </section>

        {/* 4. TASK 3A – REPLY TO PRIYA */}
        <section id="task-3a" className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                4. Task 3A – Reply to Priya
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Professional email response to Priya regarding revenue reconciliation
              </p>
            </div>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-md transition-colors"
            >
              {emailCopied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* EMAIL CARD - NO INVENTED EMAIL ADDRESSES */}
          <div className="border border-slate-200 rounded-md bg-white overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-200 px-5 py-3 text-xs text-slate-700">
              <span className="font-semibold text-slate-900">{TASK_3A_EMAIL.subject}</span>
            </div>

            <div className="p-6 text-sm text-slate-800 leading-relaxed space-y-4">
              <p>{TASK_3A_EMAIL.salutation}</p>
              {TASK_3A_EMAIL.bodyParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <div className="pt-2">
                <p>{TASK_3A_EMAIL.signoff}</p>
                <p className="font-semibold text-slate-900">{TASK_3A_EMAIL.sender}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TASK 3B – BUG REPORT */}
        <section id="task-3b" className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                5. Task 3B – Bug Report
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Factual engineering bug report with problem, expected, impact, and fix
              </p>
            </div>
            <button
              onClick={handleCopyBug}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-md transition-colors"
            >
              {bugCopied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Bug Report</span>
                </>
              )}
            </button>
          </div>

          {/* BUG REPORT CARD - NO INVENTED PRIORITIES */}
          <div className="border border-slate-200 rounded-md bg-white overflow-hidden">
            <div className="p-6 space-y-5 text-sm">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Title:
                </div>
                <div className="font-semibold text-slate-900 text-base">
                  {TASK_3B_BUG_REPORT.title}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Problem:
                </div>
                <div className="font-mono text-xs sm:text-sm text-slate-800 bg-slate-100 border border-slate-200 rounded p-3 whitespace-pre-wrap">
                  {TASK_3B_BUG_REPORT.problem}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Expected:
                </div>
                <div className="text-slate-800 leading-relaxed whitespace-pre-line">
                  {TASK_3B_BUG_REPORT.expected}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Impact:
                </div>
                <div className="text-slate-800 leading-relaxed">
                  {TASK_3B_BUG_REPORT.impact}
                </div>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Suggested fix:
                </div>
                <div className="text-slate-800 leading-relaxed bg-slate-50 border border-slate-200 rounded p-3">
                  {TASK_3B_BUG_REPORT.suggestedFix}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. ASSUMPTION / LIMITATIONS */}
        <section id="assumptions" className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8">
          <div className="border-b border-slate-200 pb-4 mb-5">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              6. {ASSUMPTIONS_LIMITATIONS.title}
            </h2>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-md p-4 sm:p-5">
            <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
              {ASSUMPTIONS_LIMITATIONS.statement}
            </p>
          </div>
        </section>

        {/* DEVELOPER QUICK GUIDE */}
        <section className="bg-slate-100/70 border border-slate-200 rounded-lg p-6 sm:p-8 no-print">
          <div className="mb-4">
            <h3 className="text-base font-bold text-slate-900">Developer & Reviewer Guide</h3>
            <p className="text-xs text-slate-600 mt-0.5">
              Instructions for running locally in VS Code or deploying to Vercel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="bg-white border border-slate-200 rounded p-3.5">
              <div className="font-semibold text-slate-900 mb-1">1. Run in VS Code</div>
              <p className="text-slate-600">
                Open folder in VS Code, open <code className="bg-slate-100 px-1 py-0.5 rounded">standalone.html</code> with Live Server, or run <code className="bg-slate-100 px-1 py-0.5 rounded">npm run dev</code>.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded p-3.5">
              <div className="font-semibold text-slate-900 mb-1">2. Build Project</div>
              <p className="text-slate-600">
                Run <code className="bg-slate-100 px-1 py-0.5 rounded">npm run build</code> to produce production assets in the <code className="bg-slate-100 px-1 py-0.5 rounded">dist</code> folder.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded p-3.5">
              <div className="font-semibold text-slate-900 mb-1">3. Deploy to Vercel</div>
              <p className="text-slate-600">
                Push to GitHub and import into Vercel (Preset: Vite) or deploy directly with the Vercel CLI.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs sm:text-sm text-slate-600 mt-auto">
        <div className="max-w-6xl mx-auto px-4">
          <p className="font-medium text-slate-700">{CANDIDATE_INFO.footerText}</p>
        </div>
      </footer>
    </div>
  );
}
