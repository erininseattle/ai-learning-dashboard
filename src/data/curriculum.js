// Curriculum data for AI Product Design course
// 8 weeks + 3-phase capstone

export const weeks = [
  {
    id: 'week-1',
    week: 1,
    title: 'Week 1: Make JavaScript Click',
    description: 'Build a solid foundation in JavaScript fundamentals using design-friendly analogies.',
    activities: [
      {
        id: 'w1-a1',
        title: 'Variables & Data Types',
        learningGoal: 'Understand how JavaScript stores and works with different types of data',
        prompt: `I'm a senior UX/Product Design manager learning JavaScript to build AI product prototypes. I understand HTML/CSS but JavaScript confuses me.

Help me understand JavaScript variables and data types. Please:
1. Explain them like I'm a designer who works with design systems
2. Use visual analogies
3. Show me 2-3 simple examples using UI elements I'd understand
4. After explaining, quiz me to make sure I got it

Keep it conversational and check my understanding as we go.`,
      },
      {
        id: 'w1-a2',
        title: 'Functions',
        learningGoal: 'Write and understand simple functions',
        prompt: `I'm learning JavaScript as a design manager. I just learned about variables and data types.

Now I need to understand functions. Please:
1. Explain functions using a simple button click example
2. Show me how functions take inputs (like design tokens) and return outputs
3. Give me 3 progressively complex examples
4. Help me write my first function that does something useful for a designer

Keep checking my understanding and let me ask questions.`,
      },
      {
        id: 'w1-a3',
        title: 'DOM Manipulation',
        learningGoal: 'Change page content and styles with JavaScript',
        prompt: `I'm a design manager learning JavaScript. I understand variables and functions now.

Help me learn DOM manipulation - how JavaScript changes what's on the page. Please:
1. Explain what the DOM is using a design/Figma analogy
2. Show me 3 simple examples: changing text, changing styles, adding elements
3. Walk me through each example step by step
4. Help me build one interactive example myself

I learn best by doing, so guide me through building something.`,
      },
      {
        id: 'w1-a4',
        title: 'Events & Listeners',
        learningGoal: 'Make interactive elements that respond to user actions',
        prompt: `I'm learning JavaScript and just learned about DOM manipulation.

Now I need to understand event listeners - how to make things happen when users interact. Please:
1. Explain event listeners like I'm designing an interaction in Figma
2. Show me the most common events (click, input, submit)
3. Give me 3 examples of increasing complexity
4. Help me combine everything I've learned: create an interactive element that responds to user input

Guide me through building it piece by piece.`,
      },
    ],
  },
  {
    id: 'week-2',
    week: 2,
    title: 'Week 2: Practice Project',
    description: 'Apply your JavaScript fundamentals by building your first AI-powered prototype.',
    activities: [
      {
        id: 'w2-a1',
        title: 'Async/Await Basics',
        learningGoal: 'Understand how to work with asynchronous operations like API calls',
        prompt: `I'm a design manager learning JavaScript to build AI prototypes. I understand variables, functions, DOM manipulation, and events.

Now I need to understand async/await - which is how we call AI APIs. Please:
1. Explain async/await using the analogy of calling an AI API and waiting for a response
2. Show me the difference between synchronous and asynchronous code
3. Give me a simple example of fetching data and displaying it
4. Help me understand promises at a basic level

Use examples relevant to calling APIs, since that's what I'll be doing.`,
      },
      {
        id: 'w2-a2',
        title: 'Build: Button \u2192 AI \u2192 Response',
        learningGoal: 'Build your first working AI-powered prototype',
        prompt: `I'm ready to build my first AI-powered prototype! I'm a design manager who now understands JavaScript basics and async/await.

Help me build a simple interactive prototype with these features:
* A text input where I can type a message
* A button that sends the text to Claude's API
* Display Claude's response on the page
* Show a loading state while waiting

Build this as a React component using the Anthropic API (which is already available in artifacts).

IMPORTANT: Build it step by step. After each step, show me the code and explain what each part does. Don't give me the whole thing at once - I need to understand it piece by piece.

Let's start with just the form UI (input + button), then we'll add the API call.`,
      },
      {
        id: 'w2-a3',
        title: 'Code Review & Understanding',
        learningGoal: 'Deeply understand the code you wrote',
        prompt: `I just built a simple AI-powered prototype (button that sends text to Claude and shows response).

Now I need to make sure I actually understand what I built. Please review my code with me:

[Paste your code here]

For each part of the code:
1. Ask me to explain what it does
2. If I'm right, confirm and add any details I missed
3. If I'm wrong, gently correct me and explain it better
4. Point out any patterns or concepts I should remember

This is a teaching moment - help me deeply understand what I've built, don't just tell me it's good.`,
      },
    ],
  },
  {
    id: 'week-3',
    week: 3,
    title: 'Week 3: Understanding AI APIs',
    description: 'Dive deep into API fundamentals, prompt engineering, and streaming responses.',
    activities: [
      {
        id: 'w3-a1',
        title: 'API Fundamentals',
        learningGoal: 'Understand the anatomy of an API call',
        prompt: `I'm a design manager learning to build AI products. I've built a basic prototype that calls Claude's API.

Help me understand APIs more deeply:
1. What exactly happens when I make an API call? (request/response cycle)
2. What's in a request to an AI API? (messages, model, parameters)
3. What comes back in the response? (content, metadata)
4. What are the key parameters I should know? (temperature, max_tokens, etc.)

Use my existing prototype as the example. Explain each concept and show me where it appears in real code.`,
      },
      {
        id: 'w3-a2',
        title: 'Prompt Engineering Basics',
        learningGoal: 'Write effective prompts that shape AI behavior',
        prompt: `I understand how to call an AI API. Now I need to learn how to write effective prompts programmatically.

Teach me about:
1. The difference between system prompts and user messages
2. How to structure prompts for specific outputs
3. Few-shot examples and when to use them
4. How to make responses more consistent/structured

Then help me improve my prototype by adding a system prompt that makes Claude act as a design critique assistant.

Let's iterate on the prompt together - I'll try one, you'll give feedback, we'll refine.`,
      },
      {
        id: 'w3-a3',
        title: 'Streaming Responses',
        learningGoal: 'Implement streaming for better UX',
        prompt: `My current prototype waits for the full AI response before showing anything. I want to learn about streaming to make it feel faster.

Help me understand:
1. What is streaming and why does it matter for UX?
2. How does streaming work technically?
3. What changes in my code to handle streaming?
4. What loading states should I show?

Then help me modify my prototype to use streaming. Guide me through the changes step by step.`,
      },
      {
        id: 'w3-a4',
        title: 'Build: Design Critique Tool',
        learningGoal: 'Build a practical AI tool that solves a real team need',
        prompt: `I'm ready to build something useful for my team!

Help me build a design critique generator tool:
* Input: Designer pastes a description of their design
* The AI analyzes it for: accessibility concerns, edge cases, content issues, usability
* Output: Structured critique with specific suggestions
* Uses streaming for real-time feedback

Build this with me step by step:
1. First, help me write the system prompt (what role should Claude play?)
2. Then, design the input form (what fields do we need?)
3. Then, add the API call with streaming
4. Finally, format the output nicely

At each step, explain your choices and ask me questions about what I want.`,
      },
    ],
  },
  {
    id: 'week-4',
    week: 4,
    title: 'Week 4: First Team Tool',
    description: 'Polish your design critique tool with error handling, UI refinement, and real-world testing.',
    activities: [
      {
        id: 'w4-a1',
        title: 'Add Error Handling',
        learningGoal: 'Build resilient tools that handle failures gracefully',
        prompt: `I built a design critique tool but it doesn't handle errors well. Help me make it more robust.

Teach me about:
1. What can go wrong when calling an AI API?
2. How to catch and display errors gracefully
3. What UX patterns work best for error states
4. How to add retry logic

Then help me add proper error handling to my tool. Show me where errors might occur and how to handle each case.`,
      },
      {
        id: 'w4-a2',
        title: 'Polish the UI',
        learningGoal: 'Apply design craft to AI tools',
        prompt: `My design critique tool works but looks basic. As a designer, I want to make it beautiful and easy to use.

Help me improve:
1. The visual design (better typography, spacing, colors)
2. The interaction design (loading states, transitions, feedback)
3. The information architecture (how results are organized)
4. Accessibility (keyboard nav, screen readers, contrast)

Let's iterate on this together. I'll describe what I want, you'll help me implement it. Use Tailwind classes since that's what we have available.`,
      },
      {
        id: 'w4-a3',
        title: 'Test with Real Designs',
        learningGoal: 'Learn to evaluate and improve AI tool quality',
        prompt: `I want to test my design critique tool with real work. I'll paste in a design description and we'll evaluate how well the tool works.

[Paste a real design description here]

After the tool generates its critique:
1. Help me assess the quality of the feedback
2. Identify what worked well and what didn't
3. Brainstorm how to improve the prompt or UX
4. Try an improved version

This is about learning to evaluate and iterate on AI tools.`,
      },
    ],
  },
  {
    id: 'week-5',
    week: 5,
    title: 'Week 5: AI Product Patterns \u2014 RAG',
    description: 'Learn Retrieval Augmented Generation \u2014 how AI finds and uses information from your own data.',
    activities: [
      {
        id: 'w5-a1',
        title: 'Understanding RAG',
        learningGoal: 'Understand when and why to use RAG',
        prompt: `I want to understand RAG (Retrieval Augmented Generation) - how AI finds information and uses it.

Explain:
1. What problem does RAG solve? (Why not just put everything in the prompt?)
2. How does RAG work at a high level?
3. What are the key components? (search, retrieval, generation)
4. What are common use cases for RAG?
5. What are the limitations and tradeoffs?

Use concrete examples from products I might know. Help me understand when to use RAG vs. other patterns.`,
      },
      {
        id: 'w5-a2',
        title: 'Simple RAG Implementation',
        learningGoal: 'Build a basic RAG system',
        prompt: `I want to build a simple RAG prototype. Let's make an "Ask questions about our design system" tool.

Here's how it should work:
1. I paste in design system documentation (as text)
2. Users ask questions about the design system
3. The AI searches through the docs to find relevant parts
4. It answers based on what it found, quoting from the docs

Build this with me step by step:
* First: How do we store and search the documentation?
* Second: How do we pass relevant chunks to the AI?
* Third: How do we tell the AI to cite its sources?

Start with the simplest possible version, then we'll improve it.`,
      },
      {
        id: 'w5-a3',
        title: 'Handling Token Limits',
        learningGoal: 'Manage context windows and token limits',
        prompt: `My RAG tool works but I'm hitting issues when the documentation is too long. Help me understand and solve token limit problems.

Teach me about:
1. What are token limits and why do they exist?
2. How do I know how many tokens I'm using?
3. What strategies exist for handling large documents? (chunking, summarization, smart retrieval)
4. What are the tradeoffs of each approach?

Then help me implement a solution for my design system Q&A tool. We need to handle docs that are too long to fit in one prompt.`,
      },
      {
        id: 'w5-a4',
        title: 'Improve Retrieval Quality',
        learningGoal: 'Improve RAG accuracy through better retrieval',
        prompt: `My RAG tool sometimes retrieves the wrong sections or misses relevant information. Help me improve the retrieval quality.

Let's experiment with:
1. Better search/matching strategies
2. Retrieving multiple chunks and letting the AI choose
3. Adding metadata to help with retrieval
4. Asking clarifying questions when the query is ambiguous

Test this with real questions about design systems. Let's iterate until the retrieval feels accurate.`,
      },
    ],
  },
  {
    id: 'week-6',
    week: 6,
    title: 'Week 6: AI Product Patterns \u2014 Tool Use',
    description: 'Learn function calling \u2014 how AI can take actions and use external tools.',
    activities: [
      {
        id: 'w6-a1',
        title: 'Understanding Function Calling',
        learningGoal: 'Understand the function calling pattern',
        prompt: `I want to understand function calling (tool use) - how AI can take actions instead of just talking.

Explain:
1. What is function calling and why is it useful?
2. How does the AI know when to use a tool vs. just respond?
3. How do you define what tools are available?
4. What happens after the AI calls a function?
5. What are common use cases and limitations?

Use concrete examples. Show me the flow: user message \u2192 AI decides to use tool \u2192 tool executes \u2192 AI uses result \u2192 responds to user.`,
      },
      {
        id: 'w6-a2',
        title: 'Build: Weather Tool Example',
        learningGoal: 'Build your first function calling implementation',
        prompt: `Help me build a simple function calling example - a tool that can answer weather questions.

It should:
1. Recognize when someone asks about weather
2. Call a weather API to get current conditions
3. Format and return the answer

Build this with me step by step:
* How do I define the weather tool for the AI?
* How does the AI return the function call?
* How do I execute it and feed the results back?
* How do I handle errors (city not found, API failure)?

Start simple, then we'll add complexity.`,
      },
      {
        id: 'w6-a3',
        title: 'Multiple Tools',
        learningGoal: 'Build multi-tool AI systems',
        prompt: `Now that I understand basic function calling, help me build a more complex example with multiple tools.

Let's build an assistant that can:
* Check the weather (using a weather API)
* Do calculations (using a calculator function)
* Look up definitions (using a dictionary API)

The AI should decide which tool(s) to use based on the question, or use none if it can answer directly.

Help me:
1. Define multiple tools for the AI
2. Handle the AI calling multiple tools in sequence
3. Create a good UX for showing what's happening
4. Test it with various queries

Let's see how far we can push this pattern.`,
      },
      {
        id: 'w6-a4',
        title: 'Design Pattern Analysis',
        learningGoal: 'Develop judgment about AI product patterns',
        prompt: `I've now built tools using RAG and function calling. Help me analyze when to use each pattern.

Let's create a decision framework:
1. When should I use RAG vs. function calling vs. both?
2. What are the UX implications of each?
3. What are the technical tradeoffs?
4. What hybrid patterns exist?

Then help me document this as a "pattern library" I can share with my team. Include:
* Problem each pattern solves
* When to use it
* Implementation complexity
* UX considerations
* Example use cases

This should be a practical guide for product designers.`,
      },
    ],
  },
  {
    id: 'week-7',
    week: 7,
    title: 'Week 7: Multi-Turn Conversations',
    description: 'Build AI experiences that maintain context across multiple turns of conversation.',
    activities: [
      {
        id: 'w7-a1',
        title: 'Understanding Conversation State',
        learningGoal: 'Understand stateful conversation design',
        prompt: `I want to understand how to build AI that remembers previous messages in a conversation.

Teach me about:
1. How is conversation history stored and passed to the AI?
2. What's the structure of a multi-turn conversation?
3. How does context build up over multiple turns?
4. When do you need to manage/truncate old messages?
5. What are the UX patterns for showing conversation history?

Show me examples of good multi-turn conversation UX (like ChatGPT or Claude).`,
      },
      {
        id: 'w7-a2',
        title: 'Build: Design Critique Bot',
        learningGoal: 'Build multi-turn conversational experiences',
        prompt: `Help me build a conversational design critique bot that asks clarifying questions.

The flow should be:
1. User describes a design at a high level
2. Bot asks clarifying questions (What's the user's goal? What device? What's the context?)
3. User answers
4. Bot asks more questions if needed
5. Eventually provides a comprehensive critique based on the full conversation

Build this with me:
* How do we store the conversation history?
* How do we structure the system prompt to encourage questions?
* How do we know when to stop asking and give the critique?
* How do we display the conversation naturally?

Let's make this feel like a real conversation with a design partner.`,
      },
      {
        id: 'w7-a3',
        title: 'Context Window Management',
        learningGoal: 'Handle long conversations gracefully',
        prompt: `My conversational bot works but I'm worried about long conversations hitting token limits. Help me manage the context window.

Teach me strategies for:
1. Tracking how many tokens are in the conversation
2. Summarizing old messages when context gets too long
3. Deciding what to keep vs. what to drop
4. Maintaining conversation coherence when truncating

Then help me implement this in my design critique bot. We need it to work even in very long conversations.`,
      },
      {
        id: 'w7-a4',
        title: 'Conversation UX Patterns',
        learningGoal: 'Master conversational UX patterns',
        prompt: `Now that I've built a conversational tool, help me analyze what makes good conversation UX.

Let's examine:
1. How to show the AI is "thinking"
2. How to handle conversation branching (user wants to go back)
3. How to summarize long conversations
4. How to export or share conversations
5. How to handle errors mid-conversation

Then help me apply these patterns to improve my design critique bot. What UX improvements would make the biggest difference?`,
      },
    ],
  },
  {
    id: 'week-8',
    week: 8,
    title: 'Week 8: Advanced Topics',
    description: 'Structured output, combining patterns, evaluation, and capstone preparation.',
    activities: [
      {
        id: 'w8-a1',
        title: 'Structured Output',
        learningGoal: 'Get reliable structured data from AI',
        prompt: `I want to learn how to get reliable, structured data from AI (like JSON) instead of just freeform text.

Teach me:
1. Why would I want structured output?
2. How do I prompt for JSON reliably?
3. How do I validate and parse the response safely?
4. What are common patterns for structured data?
5. What are the limitations and failure modes?

Then show me examples: turning "design critique" into structured JSON with sections, scores, and recommendations.`,
      },
      {
        id: 'w8-a2',
        title: 'Combining Patterns',
        learningGoal: 'Architect complex AI systems',
        prompt: `I've learned RAG, function calling, multi-turn conversations, and structured output. Help me understand how to combine these patterns.

Let's design a complex tool together that uses multiple patterns:
* A design system assistant that can:
   * Answer questions about the docs (RAG)
   * Generate code examples (structured output)
   * Check if a design follows guidelines (function calling to validation tools)
   * Have a conversation to understand the user's needs (multi-turn)

Help me architect this:
1. What's the overall flow?
2. How do the patterns work together?
3. What's the technical complexity?
4. What could go wrong?

We don't need to build it all, but help me think through the design.`,
      },
      {
        id: 'w8-a3',
        title: 'Evaluation & Testing',
        learningGoal: 'Evaluate and test AI products systematically',
        prompt: `I've built several AI tools but I'm not sure how to systematically evaluate if they're working well. Help me learn about testing AI products.

Teach me:
1. How do you test AI features? (It's not deterministic!)
2. What metrics matter? (accuracy, latency, user satisfaction)
3. How do you catch regressions?
4. How do you A/B test prompts?
5. What are common failure modes to watch for?

Then help me create a testing plan for one of my tools. What should I test? How?`,
      },
      {
        id: 'w8-a4',
        title: 'Preparing for Capstone',
        learningGoal: 'Synthesize learning and plan capstone',
        prompt: `I'm about to start my capstone project. Help me prepare by reviewing everything I've learned.

Let's do a comprehensive review:
1. What patterns have I learned? (RAG, function calling, conversations, structured output)
2. When should I use each one?
3. What are the key technical concepts? (APIs, prompts, tokens, streaming)
4. What makes good AI product UX?
5. What are common pitfalls to avoid?

Then help me think through my capstone project:
* What agent do I want to build? (it might not be Valuations - maybe Deal Sourcing or something else)
* What patterns will it need?
* What's the core user value?
* What's technically risky?

Let's scope something achievable but impressive.`,
      },
    ],
  },
];

export const capstone = {
  id: 'capstone',
  title: 'Capstone Project: Build Your Agent',
  description: 'Apply everything you\'ve learned across 3 phases to design, build, test, and document your own AI agent.',
  phases: [
    {
      id: 'phase-1',
      title: 'Phase 1: Discovery & Scoping',
      description: 'Define the problem, choose your patterns, and design the interaction.',
      activities: [
        {
          id: 'cap-p1-a1',
          title: 'Define the Problem',
          learningGoal: 'Clearly define the problem your agent will solve',
          prompt: `Help me define what agent I want to build for my capstone project.

Let's work through:
1. What problem am I trying to solve for my team?
2. Who are the users and what do they need?
3. What would success look like?
4. What are the constraints? (data access, APIs available, technical complexity)

I'm considering: [describe your agent idea - could be Deal Sourcing Agent, Valuations Agent, or something else]

Ask me questions to help refine this. Push me to be specific about the user value.`,
        },
        {
          id: 'cap-p1-a2',
          title: 'Choose Your Patterns',
          learningGoal: 'Select the right patterns for your use case',
          prompt: `I've defined my agent: [summarize your agent idea]

Now help me choose which AI patterns to use:
1. Will it need RAG? (searching through data/docs)
2. Will it need function calling? (taking actions, calling APIs)
3. Will it need multi-turn conversation? (asking questions, building context)
4. Will it need structured output? (returning data in specific formats)

For each pattern I choose:
* Why is this pattern necessary?
* What will it enable?
* What's the alternative if I don't use it?
* What's the implementation complexity?

Help me make smart tradeoffs between scope and feasibility.`,
        },
        {
          id: 'cap-p1-a3',
          title: 'Design the Interaction',
          learningGoal: 'Design the complete user experience',
          prompt: `I know what patterns I'm using for my agent: [list patterns]

Now help me design the interaction model:
1. How does the user start? (What's the entry point?)
2. What does the conversation flow look like?
3. What information does the agent need to gather?
4. How does the agent show its work/reasoning?
5. What does the output look like?
6. How does the user refine or iterate?

Create a step-by-step interaction flow. Think about:
* What questions does the agent ask?
* What actions can the user take?
* What feedback does the agent provide?
* How do we handle errors or uncertainty?

Let's sketch this out before we build anything.`,
        },
      ],
    },
    {
      id: 'phase-2',
      title: 'Phase 2: Build',
      description: 'Build your agent incrementally \u2014 foundation first, then layer on patterns.',
      activities: [
        {
          id: 'cap-p2-a1',
          title: 'Build the Foundation',
          learningGoal: 'Build the conversational foundation',
          prompt: `I'm ready to start building my agent. I've designed the interaction flow: [summarize flow]

Let's build the foundation first:
1. Set up the basic UI (input, conversation display, output area)
2. Implement the conversation management (storing messages, displaying history)
3. Create the initial system prompt (what role does the agent play?)
4. Test basic conversation flow (no tools yet, just chat)

Build this with me step by step. We'll add the complex stuff (RAG, function calling) in the next activity.

Focus on getting the core conversation working well first.`,
        },
        {
          id: 'cap-p2-a2',
          title: 'Add Pattern #1',
          learningGoal: 'Successfully implement your first complex pattern',
          prompt: `My agent's basic conversation works. Now let's add the first major pattern.

[Choose your most important pattern: RAG, function calling, structured output]

I'm adding: [pattern name]

Help me implement this:
1. What needs to change in my code?
2. How do I structure this pattern?
3. How do I test that it's working?
4. How do I handle errors?

Build this incrementally. Let's get one pattern working really well before adding the next.`,
        },
        {
          id: 'cap-p2-a3',
          title: 'Add Additional Patterns',
          learningGoal: 'Integrate multiple patterns successfully',
          prompt: `Pattern #1 is working: [describe what's working]

Now I need to add: [additional patterns you need]

Help me:
1. Integrate this new pattern with what I've already built
2. Make sure the patterns work together smoothly
3. Handle the increased complexity
4. Keep the code organized and understandable

Guide me through adding each pattern one at a time. Test after each addition.`,
        },
        {
          id: 'cap-p2-a4',
          title: 'Polish & Error Handling',
          learningGoal: 'Build a robust, polished tool',
          prompt: `The core functionality of my agent works! Now I need to make it robust and polished.

Help me add:
1. Comprehensive error handling (What can go wrong? How do we recover?)
2. Loading states and progress indicators
3. Better UX feedback (show what the agent is doing)
4. Input validation
5. Edge case handling

Go through my code and identify:
* Where might it break?
* Where is the UX confusing?
* What feedback is missing?
* What could be more elegant?

Let's make this production-quality.`,
        },
      ],
    },
    {
      id: 'phase-3',
      title: 'Phase 3: Test & Document',
      description: 'Thoroughly test your agent, document your work, and reflect on your learning.',
      activities: [
        {
          id: 'cap-p3-a1',
          title: 'Test with Real Scenarios',
          learningGoal: 'Thoroughly test your agent',
          prompt: `My agent is built! Now I need to test it thoroughly with real use cases.

Help me:
1. Create a test plan (What scenarios should I test?)
2. Test each scenario and document what works/doesn't
3. Identify patterns in failures
4. Prioritize fixes

Test scenarios should include:
* Happy path (everything works)
* Edge cases (unusual inputs)
* Error cases (missing data, API failures)
* Complex multi-turn conversations
* Real tasks from my team

Let's be systematic about finding and fixing issues.`,
        },
        {
          id: 'cap-p3-a2',
          title: 'Create Documentation',
          learningGoal: 'Document your work for others',
          prompt: `I want to share this agent with my team. Help me create clear documentation.

Create:
1. User guide: How to use the agent (with examples)
2. Technical overview: How it works (for other designers/PMs)
3. Limitations: What it can't do (set expectations)
4. Future improvements: What could make it better

For each section:
* Who is the audience?
* What do they need to know?
* What level of detail is appropriate?

Help me write documentation that's actually useful, not just comprehensive.`,
        },
        {
          id: 'cap-p3-a3',
          title: 'Reflection & Learning',
          learningGoal: 'Consolidate and articulate your learning',
          prompt: `I've completed my capstone! Help me reflect on what I learned.

Let's discuss:
1. What was harder than expected? Why?
2. What was easier than expected?
3. What would I do differently next time?
4. What patterns/techniques will I use again?
5. What do I still want to learn?
6. How has this changed how I think about AI products?

This reflection will help me:
* Consolidate my learning
* Identify gaps to fill
* Articulate my growth to others
* Plan next steps

Be thoughtful and honest in this reflection.`,
        },
      ],
    },
  ],
};

// Helper to get all activity IDs (used for progress tracking)
export function getAllActivityIds() {
  const weekIds = weeks.flatMap((w) => w.activities.map((a) => a.id));
  const capstoneIds = capstone.phases.flatMap((p) => p.activities.map((a) => a.id));
  return [...weekIds, ...capstoneIds];
}
