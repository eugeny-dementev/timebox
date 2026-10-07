import React from 'react';
import Attractor from '../Attractor';
import Header from '../Header';
import Descriptor from '../Descriptor';
import Center from '../Center';
import { Link } from 'react-router-dom';

export default function Howto() {
  return (
    <main>
      <Attractor pic='timebox-planning-v2.jpg'>
        <Header>
          How to timebox your day
        </Header>
        <Descriptor>
          A practical time management routine: write down your tasks, choose your priorities
          and schedule focused work with a printable planner.
        </Descriptor>
      </Attractor>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg leading-relaxed">
            Start with a <Link to="/generate" className="text-green-400 underline">free timeboxing planner PDF</Link>
            {' '}and a pen. Daily versions v1 and v2 include three sections: a brain dump,
            top priorities and a schedule. The same routine works with a weekly or monthly overview.
          </p>

          <div>
            <h2 className="text-2xl text-green-400 font-bold mb-2">
              Brain Dump
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Offload your thoughts to clear your mind, making it easier to concentrate on tasks.
              </li>
              <li>
                Note down everything, context, big-picture ideas, and small details that are easy to forget but could be useful for your tasks.
              </li>
              <li>
                Write everything down in the evening before the next day or first thing in the morning.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-green-400 font-bold mb-2">
              Top Priorities
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Realistically, there's only so much you can effectively accomplish in one day.
              </li>
              <li>
                Review your Brain Dump and identify the most important tasks that must be completed for the day to be considered successful.
              </li>
              <li>
                Your top priority is what matters most, regardless of its size or whether it relates to work or personal life.
                What's critical is its necessity to be completed today.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-green-400 font-bold mb-2">
              Scheduling
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Allocate time to the tasks you aim to complete today.
                Avoid overbooking your day, leave some flexibility in your schedule for adjustments.
              </li>
              <li>
                Remember your priorities and allocate more time to top-priority tasks, as these are crucial to accomplish.
              </li>
              <li>
                Include breaks, family time, and household chores in your schedule. Having a comprehensive plan helps maintain focus without overthinking time allocation.
              </li>
              <li>
                Lastly, understand that not every task needs to be completed today fully.
                For example, dedicating 30 minutes to house cleaning daily is more manageable than attempting to do everything in one day, reducing the potential for overwhelm.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl text-green-400 font-bold mb-2">A simple daily timeboxing example</h2>
            <p className="text-lg leading-relaxed">
              Suppose your priority is to finish a report. Reserve 9:00–10:00 for a first draft,
              take a break, then schedule 10:15–10:45 for reviewing it. Put email into a separate
              timebox instead of checking it throughout the draft. When a timebox ends, review
              what you completed and decide whether the task needs another block.
            </p>
            <p className="text-lg leading-relaxed mt-3">
              For a weekly plan, spread your priorities across seven days. For a monthly plan,
              use the 30-day or four-week template to choose milestones before scheduling daily work.
              Keep some time unallocated so the plan can adapt to appointments or unexpected tasks.
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-green-400 font-bold mb-2">Download and print your planner</h2>
            <p className="text-lg leading-relaxed">
              In the generator, choose day, week or month, then select one A5 planner or two
              planners on a portrait A4 sheet. Preview your layout and download the PDF.
              Print at 100% / Actual size; the A4 option includes a cutting guide between its two copies.
              No account is required.
            </p>
          </div>
        </div>
      </section>

      <Attractor pic='timebox-pdfs-v2.jpg'>
        <Header as="h2">
          Download a planner for your next timebox
        </Header>
        <Center>
          <Link to="/generate" className="py-2 px-2 font-big text-white bg-green-500 rounded hover:bg-green-400">
            Generate PDFs
          </Link>
        </Center>
      </Attractor>
    </main>
  );
}
