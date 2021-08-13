<template>
  <div>
    <h1 class="question">{{ this.currentQuestion }}</h1>

    <div class="timer">{{ times }}s</div>
    <div class="controls">
      <button @click="startTimer" class="button">Start / Spacebar</button>
    </div>

    <div v-if="currentTip" class="tip">
      <span style="font-weight: 800">Pro tip:</span>

      {{ currentTip }}
    </div>

    <div v-if="failed" class="failed">
      <!-- <h3>You failed</h3> -->
      <img src="/noinvestment.png" alt="" />
    </div>
    <ClientOnly>
      <KeyboardPressed v-on:keyup="keyboardEvent"></KeyboardPressed>
    </ClientOnly>
  </div>
</template>
<script>
export default {
  data() {
    return {
      times: 0,
      random: 0,
      currentQuestion: "",
      currentTip: "",
      failed: false,
      intervalId: "",
      questions: [
        "Where do new users come from?",
        "What problems/hurdles are you anticipating?",
        "Do you have a demo?",
        "What's the conversion rate?",
        "How will customers and/or users find out about you?",
        "Why did you choose this idea?",
        "What is your user growth rate?",
        "What do you understand that others don't?",
        "How many users do you have?",
        "How much money could you make per year?",
        "How are you understanding customer needs?",
        "If your startup succeeds, what additional areas might you be able to expand into?",
        "How many users are paying?",
        "Where is the rocket science here?",
        "Why isn't someone already doing this?",
        "Why did your team get together?",
        "Who would use your product?",
        "What has surprised you about user behaviour?",
        "Who would you hire or how would you add to your team?",
        "What are the top things users want?",
        "What's the funniest thing that has happened to you?",
        "Who would be your next hire?",
        "How much does customer acquisition cost?",
        "What's the biggest mistake you have made?",
        "Are you open to changing your idea? ",
        "What is the next step with the product evolution?",
        "What's new about what you make?",
        "How do you know customers need what you're making?",
        "What, exactly, makes you different from existing options?",
        "Someone just showed us an idea like this right before you guys. I don't like it. What else do you have?",
        "In what ways are you resourceful?",
        "How does your product work in more detail?",
        "How is your product different?",
        "What part of your project are you going to build first?",
        "Six months from now, what's going to be your biggest problem?",
        "Who in your team does what?",
        "What resistance will they have to trying you and how will you overcome it?",
        "What will you do if we don't fund you?",
        "What have you learned so far from working on your product?",
        "What are the key things about your field that outsiders don't understand?",
        "Tell us about a tough problem you solved?",
        "Will your team stick at this?",
        "Who needs what you're making?",
        "How are you meeting customers?",
        "What do you know about this space/product others don't know?",
        "What is your growth like?",
        "Why will you succeed?",
        "Who is 'the boss'?",
        "Why did you pick this idea to work on?",
        "Who might become competitors?",
        "Have you raised funding?",
        "What else have you created together?",
        "How will you get users?",
        "What systems have you hacked?",
        "What is your distribution strategy?",
        "What's the worst thing that has happened?",
        "What is your burn rate?",
        "What obstacles will you face and how will you overcome them?",
        "Who are your competitors?",
        "What are you going to do next?",
        "How do you know people want this?",
        "How big an opportunity is there?",
        "Why do the reluctant users hold back?",
        "What domain expertise do you have?",
        "How did your team meet?",
        "How long can you go before funding?",
        "What competition do you fear most?",
        "Tell us something surprising you have done?",
        "What makes new users try you?",
        "What do you understand about your users?",
        "Would you relocate to Silicon Valley?",
        "What's an impressive thing you have done?",
        "done",
      ],
      tips: [
        "Try to have quick and concise answers.",
        "Try to answer in 2 to 3 sentences.",
        "Answer like you would in a conversation, this is not a presentation.",
        "When talking to investors, be substantive, and get straight to the point.",
        "DO NOT BEAT AROUND THE BUSH. Do not hem and haw. \"Uhm's\" and 'uh's\" don't lend an aura of intelligence.",
        'Use precise and concise language. You aren\'t pitching a VC that will ask you what your "secret sauce" is.',
        "Try to match investor speach tempo (as you should when talking to anyone)",
      ],
    };
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    startTimer: function (cleanIntervalBefore) {
      this.pickQuestion();
      this.pickTip();
      this.times = 15;
      this.failed = false;
      if (cleanIntervalBefore) {
        clearInterval(this.intervalId);
      }
      this.intervalId = setInterval(() => {
        if (this.times <= 0) {
          clearInterval(this.intervalId);
          this.failed = true;
        } else {
          this.times--;
        }
      }, 1000);
    },
    keyboardEvent(e) {
      if (e.which === 13) {
        // Enter pressed
        // Reset questioniere
      }
      if (e.which === 32) {
        // Space pressed
        // Reset Timer
        if (this.times <= 0) {
          this.startTimer();
        } else {
          // Next question
          this.startTimer(true);
        }
      }
    },
    pickTip() {
      this.currentTip = this.tips[this.getRandomInt(0, this.tips.length - 1)];
    },
    pickQuestion() {
      this.currentQuestion =
        this.questions[this.getRandomInt(0, this.questions.length - 1)];
    },
    getRandomInt: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
  },
};
</script>
<style scoped>
.question {
  text-align: center;
  margin-top: 5rem;
  height: 100px;
}

.timer {
  margin-top: 4rem;
  text-align: center;
  font-size: 1.5rem;
}

.controls {
  margin-top: 0.5rem;
  text-align: center;
  font-size: 1.2rem;
}

.tip {
  margin-top: 2rem;
  border: 2px gray solid;
  padding: 10px;
  text-align: center;
}
.failed {
  text-align: center;
  margin: 0 auto;
  width: 300px;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.failed h3 {
  color: red !important;
}
.failed img {
  border-radius: 3rem;
}
.button {
  font-weight: 600;
  font-size: 1.1rem;
}
</style>
