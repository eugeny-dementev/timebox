import React from 'react';
import Attractor from '../Attractor';
import Header from '../Header';
import Descriptor from '../Descriptor';
import Center from '../Center';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main>
      <Attractor pic="timebox-fight-v2.jpg">
        <Header>Free printable timeboxing planners</Header>
        <Descriptor>
          Plan your day, week or month with a simple time management tool.
          Generate a planner PDF, print it and give your priorities a place in your schedule.
          Free to use, with no account needed.
        </Descriptor>
        <Center>
          <Link to="/generate" className="py-3 px-4 text-white bg-green-600 rounded hover:bg-green-500">
            Create your free PDF planner
          </Link>
        </Center>
      </Attractor>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl text-green-400 font-bold mb-2">What is timeboxing?</h2>
            <p>
              Timeboxing means setting aside a fixed amount of time for a task.
              Instead of working through an open-ended to-do list, you decide what to work on
              and when to stop. A time blocking planner makes those decisions visible on paper:
              focused work, appointments, study sessions, breaks and personal time all have a place.
            </p>
            <p className="mt-3">
              Start with the tasks that matter most, give them realistic time limits and leave room
              for interruptions. Review your plan as the day changes rather than trying to fill every minute.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-green-400 font-bold mb-2">Choose a daily, weekly or monthly planner PDF</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Daily planner:</strong> versions v1 and v2 combine top priorities,
                a brain dump and a timed schedule. Version v3 provides two schedule columns
                for a plan that needs more writing space.
              </li>
              <li>
                <strong>Weekly planner:</strong> organize seven days alongside your priorities
                and notes. Use it to plan recurring commitments and the tasks you want to finish this week.
              </li>
              <li>
                <strong>Monthly planner:</strong> choose a 30-day grid or a four-week overview
                to break larger goals into smaller steps. These are blank planning templates,
                so you write in your own dates and tasks.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-green-400 font-bold mb-2">Print one A5 planner or two planners on A4</h2>
            <p>
              Choose <strong>A5 · 1 planner</strong> for a single planner page.
              Choose <strong>A4 · 2 planners</strong> for two identical, full-size A5 planners
              on one portrait A4 sheet. The copies are rotated and stacked, with a faint dashed
              cutting guide between them. Print at <strong>100% / Actual size</strong> to keep
              the planner dimensions, then cut the A4 sheet in half if needed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-green-400 font-bold mb-2">How to download your free planner</h2>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Open the <Link to="/generate" className="text-green-400 underline">PDF planner generator</Link>.</li>
              <li>Choose your paper layout and day, week or month. Pick a daily version or monthly split if needed.</li>
              <li>Check the preview and select download. Save the PDF, then print it and fill it in by hand.</li>
            </ol>
            <p className="mt-3">
              The PDF is generated in your browser. No registration or subscription is required,
              and you can print additional copies from your PDF viewer.
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-green-400 font-bold mb-2">Questions about the printable planners</h2>
            <h3 className="font-semibold mt-4">Can I use a planner for work or study?</h3>
            <p>
              Yes. Write in tasks such as preparing a presentation, revising a topic or planning a project.
              Set a time limit for each task and include breaks and other commitments.
            </p>
            <h3 className="font-semibold mt-4">Do the PDFs have interactive form fields?</h3>
            <p>
              These are blank printable templates for writing on paper. They do not include
              interactive form fields; a PDF annotation app can be used to add your own notes digitally.
            </p>
            <h3 className="font-semibold mt-4">How many sheets are included in a download?</h3>
            <p>
              Each download contains one sheet: one A5 planner or two copies on A4.
              Choose the number of copies in your print dialog.
            </p>
          </div>
        </div>
      </section>

      <Attractor pic="timebox-win-v2.jpg">
        <Header as="h2">Put your priorities into your schedule</Header>
        <Descriptor>Use a simple routine to turn a blank planner into a realistic plan.</Descriptor>
        <Center>
          <Link to="/howto" className="py-3 px-4 text-white bg-green-600 rounded hover:bg-green-500">
            Learn how to timebox
          </Link>
        </Center>
      </Attractor>
    </main>
  );
}

