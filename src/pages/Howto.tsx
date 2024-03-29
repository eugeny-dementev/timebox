import React from 'react';
import Attractor from './Attractor';
import Header from './Header';
import Descriptor from './Descriptor';
import Center from './Center';
import { Link } from 'react-router-dom';

export default function Howto() {
  return (
    <main>
      <Attractor pic='timebox-planning.jpg'>
        <Header>
          Timebox: How to use it to control your time
        </Header>
        <Descriptor>
          Learn how to use timeboxing to manage your productivity
        </Descriptor>
      </Attractor>

      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg leading-relaxed">
            Timeboxing is divided into three sections: dumping, prioritizing, and scheduling.
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
        </div>
      </section>

      <Attractor pic='timebox-pdfs.jpg'>
        <Header>
          Timebox: A Symphony of Productivity and Joy
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
