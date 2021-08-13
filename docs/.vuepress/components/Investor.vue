<template>
  <div>
    <h1 class="question">{{ this.currentQuestion }}</h1>

    <div class="timer">{{ times }}s</div>
    <div class="controls">
      <button @click="startTimer" class="button">Start / Spacebar</button>
    </div>

    <div v-if="currentTip" class="tip">
      <span style="font-weight: 800;">Pro tip:</span>

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
      intervalId: '',
      questions: {
        0: "Where do new users come from?",
        1: "What problems/hurdles are you anticipating?",
        2: "Do you have a demo?",
        3: "What's the conversion rate?",
        4: "How will customers and/or users find out about you?",
        5: "Why did you choose this idea?",
        6: "What is your user growth rate?",
        7: "What do you understand that others don't?",
        8: "How many users do you have?",
        9: "How much money could you make per year?",
        10: "How are you understanding customer needs?",
        11: "If your startup succeeds, what additional areas might you be able to expand into?",
        12: "How many users are paying?",
        13: "Where is the rocket science here?",
        14: "Why isn't someone already doing this?",
        15: "Why did your team get together?",
        16: "Who would use your product?",
        17: "What has surprised you about user behaviour?",
        18: "Who would you hire or how would you add to your team?",
        19: "What are the top things users want?",
        20: "What's the funniest thing that has happened to you?",
        21: "Who would be your next hire?",
        22: "How much does customer acquisition cost?",
        23: "What's the biggest mistake you have made?",
        24: "Are you open to changing your idea? ",
        25: "What is the next step with the product evolution?",
        26: "What's new about what you make?",
        27: "How do you know customers need what you're making?",
        28: "What, exactly, makes you different from existing options?",
        29: "Someone just showed us an idea like this right before you guys. I don't like it. What else do you have?",
        30: "In what ways are you resourceful?",
        31: "How does your product work in more detail?",
        32: "How is your product different?",
        33: "What part of your project are you going to build first?",
        34: "Six months from now, what's going to be your biggest problem?",
        35: "Who in your team does what?",
        36: "What resistance will they have to trying you and how will you overcome it?",
        37: "What will you do if we don't fund you?",
        38: "What have you learned so far from working on your product?",
        39: "What are the key things about your field that outsiders don't understand?",
        40: "Tell us about a tough problem you solved?",
        41: "Will your team stick at this?",
        42: "Who needs what you're making?",
        43: "How are you meeting customers?",
        44: "What do you know about this space/product others don't know?",
        45: "What is your growth like?",
        46: "Why will you succeed?",
        47: "Who is 'the boss'?",
        48: "Why did you pick this idea to work on?",
        49: "Who might become competitors?",
        50: "Have you raised funding?",
        51: "What else have you created together?",
        52: "How will you get users?",
        53: "What systems have you hacked?",
        54: "What is your distribution strategy?",
        55: "What's the worst thing that has happened?",
        56: "What is your burn rate?",
        57: "What obstacles will you face and how will you overcome them?",
        58: "Who are your competitors?",
        59: "What are you going to do next?",
        60: "How do you know people want this?",
        61: "How big an opportunity is there?",
        62: "Why do the reluctant users hold back?",
        63: "What domain expertise do you have?",
        64: "How did your team meet?",
        65: "How long can you go before funding?",
        66: "What competition do you fear most?",
        67: "Tell us something surprising you have done?",
        68: "What makes new users try you?",
        69: "Will you reincorporate as a US company?",
        70: "What do you understand about your users?",
        71: "Would you relocate to Silicon Valley?",
        72: "What's an impressive thing you have done?",
        73: "done",
      },
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
      if(cleanIntervalBefore) {
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
          this.startTimer(true)
        }
      }
    },
    pickTip() {
      this.currentTip = this.tips[Math.floor(Math.random() * 6)];
    },
    pickQuestion() {
      this.currentQuestion = this.questions[Math.floor(Math.random() * 72)];
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
