<template>
  <WindowApp>
    <div class="dev-logs__year" v-for="(log, i) of logs" :key="i">
      <h4 class="text-h6 font-weight-bold" v-text="'Dev logs ' + log.date" />
      <ul v-if="log.changes.length > 0">
        <li v-for="(line, l) of log.changes" :key="l" v-text="line" />
      </ul>
    </div>
  </WindowApp>
</template>

<script setup>
import {computed} from 'vue';
import {useStore} from "vuex";

const store = useStore()
const logs = computed(() => store.state['dev-logs'].logs)
</script>

<style lang="scss">
.owd-window-dev-logs {
  .owd-window__content {
    overflow-y: auto;

    h4 {
      margin-bottom: 9px;
    }

    .dev-logs__year:not(:last-child) {
      margin-bottom: 18px;
    }

    ul {
      list-style-type: square;
      font-family: $owd-font-mono;
      font-size: 13px;
      margin: 0;
      padding: 10px 12px;
      background: rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(0, 0, 0, 0.15);
      border-radius: 5px;

      li {
        margin-left: 17.5px;
      }
    }
  }
}
</style>