import React, { CSSProperties } from 'react';
import css from 'style-to-object';

export default function About() {
  return (
    <main>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={css("min-height: 75vh") as CSSProperties}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={css("background-image: url(timebox-fight.png);") as CSSProperties}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <h1 className="text-white font-semibold text-5xl">
                Timebox: A Symphony of Productivity and Joy
              </h1>
              <p className="mt-4 text-lg text-blueGray-200">
                Timeboxing shines as a beacon of modern time management. It
                transforms the way we plan our day, week, and month, turning
                them into a canvas of organized blocks, each representing a
                specific task or activity
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg leading-relaxed">
            Timeboxing, as recently highlighted in a study of 100 productivity
            hacks, shines as a beacon of modern time management. It transforms
            the way we plan our day, week, and month, turning them into a canvas
            of organized blocks, each representing a specific task or
            activity. Here's an updated and joyful description of how timeboxing
            can revolutionize your approach to time management:
          </p>

          <div>
            <h2 className="text-2xl text-green-400 font-bold mb-2">
              Daily Delight with Timeboxing
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Controlled Sunrise: Begin each day with the power of choice.
                Decide what tasks will fill your day and dedicate specific time
                blocks to them, ensuring a blend of important and urgent
                activities.
              </li>
              <li>
                Distraction-Free Zones: Each timebox is a mini-oasis of focus.
                During these periods, you're in control, free from distractions,
                diligently working towards your goals.
              </li>
              <li>
                Sense of Achievement: Completing each timebox is like collecting
                a star in your daily journey, bringing a sense of accomplishment
                and progress.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-green-400 font-bold mb-2">
              Weekly Wonders with Timeboxing
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Strategic Placement of Tasks: Understanding the interplay of
                weekly tasks allows for optimal scheduling. It's like a game of
                strategic placement, ensuring the right tasks are tackled at the
                right time for maximum efficiency.
              </li>
              <li>
                Collaborative Harmony: Share your timeboxed calendar with
                colleagues, harmonizing your schedule with theirs. This fosters
                a collaborative environment, enhancing team productivity and
                understanding.
              </li>
              <li>
                Reflective Record: Your calendar becomes a tapestry of
                the week's activities, offering a clear view of accomplishments
                and areas for growth.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-green-400 font-bold mb-2">
              Monthly Mastery with Timeboxing
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Big Picture Planning: Timeboxing on a monthly scale allows for a
                birds-eye view of your goals and progress. It's like
                constructing a roadmap to success, one timebox at a time.
              </li>
              <li>
                Control and Happiness: Embrace the control timeboxing gives over
                your month, a key driver in workplace happiness. This method
                ensures that your time aligns with your priorities, fostering a
                sense of autonomy and satisfaction.
              </li>
              <li>
                Doubling Productivity: Break free from Parkinson's law, which
                suggests work expands to fill the time available. Timeboxing
                imposes disciplined, finite periods for tasks, potentially
                doubling your productivity.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl text-green-400 font-bold mb-2">
              Timeboxing: A Symphony of Productivity and Joy
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Visual and Intuitive: Timeboxing isn't just a method; it's a
                visual and intuitive approach to managing time. It's like
                painting your day, week, and month with purposeful strokes.
              </li>
              <li>
                Personal and Professional Growth: This method is a key skill for
                modern professionals. It's not just about doing more; it's about
                achieving more, both personally and in teams.
              </li>
              <li>
                Zero Cost, Infinite Value: Implementing timeboxing costs nothing
                but can yield immeasurable returns in terms of control,
                productivity, and satisfaction.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={css("min-height: 75vh") as CSSProperties}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={css("background-image: url(timebox-win.png);") as CSSProperties}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <h1 className="text-white font-semibold text-5xl">
                Timebox: A Symphony of Productivity and Joy
              </h1>
              <div className="flex justify-center mt-8">
                <a
                  href="howto.html"
                  className="py-2 px-2 font-big text-white bg-green-500 rounded hover:bg-green-400"
                >Learn how to timebox</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

