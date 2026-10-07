import React from 'react';
import { Link } from 'react-router-dom';
import { basename } from '../../options';

export default function Generate() {
  return (
    <main>
      <section className="max-w-4xl mx-auto py-8 px-6">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">Free PDF planner generator</h1>
        <p className="text-lg leading-relaxed">
          Create a printable daily, weekly or monthly timeboxing planner.
          Choose your paper layout, check the preview and select download to save your PDF.
          Free to use, with no sign-up.
        </p>
        <p className="mt-3 text-gray-300">
          A5 gives you one planner; portrait A4 gives you two identical A5 planners with a cutting guide.
        </p>
      </section>

      <iframe
        title="Timebox PDF planner options and preview"
        className="block w-full border-0 h-[850px] md:h-[1100px]"
        src={`${basename}/old_generate.html`}
        sandbox="allow-scripts allow-same-origin allow-downloads"
        scrolling="auto"
      />

      <section className="max-w-4xl mx-auto py-10 px-6 space-y-6 text-lg leading-relaxed">
        <div>
          <h2 className="text-2xl text-green-400 font-bold mb-2">Which planner template should I choose?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Day:</strong> v1 and v2 include priorities, a brain dump and a schedule. v3 has two schedule columns.</li>
            <li><strong>Week:</strong> a seven-day overview with space for priorities and notes.</li>
            <li><strong>Month:</strong> choose a blank 30-day grid or a four-week overview.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl text-green-400 font-bold mb-2">Save and print your PDF</h2>
          <p>
            Each download is one sheet. Print at <strong>100% / Actual size</strong> to preserve
            the planner dimensions, and choose extra copies in your print dialog.
            On A4, cut along the dashed line to separate the two planners.
            Fill in your dates, tasks and timeboxes by hand.
          </p>
        </div>
        <p>
          New to timeboxing? Read the <Link to="/howto" className="text-green-400 underline">time management guide</Link>
          {' '}for a simple way to choose priorities and plan focused work.
        </p>
      </section>
    </main>
  );
}
