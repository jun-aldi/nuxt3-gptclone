<template>
  <div class="h-screen">
    <main class="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
      <div class="flex-1 overflow-hidden">
        <div class="react-scroll-to-bottom--css-zvapj-79elbk h-full dark:bg-gray-800">
          <div class="react-scroll-to-bottom--css-zvapj-1n7m0yu">
            <div class="flex flex-col items-center text-sm dark:bg-gray-800">
              <div v-for="message in messages"
                class="group w-full text-gray-800 dark:text-gray-100 border-b border-black/10 dark:border-gray-900/50 dark:bg-gray-800">
                <div
                  class="text-base gap-4 md:gap-6 md:max-w-2xl lg:max-w-xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0 m-auto">
                  <div class="w-[30px] flex flex-col relative items-end">
                    <icon v-if="message.actor === 'Human'" class="bg-indigo-500" name="uil:user" size="large" />
                    <icon v-if="message.actor === 'AI'" class="bg-emerald-500" name="uil:processor" size="large" />
                  </div>
                  <div class="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]">
                    <div class="flex flex-grow flex-col gap-3">
                      <div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap break-words">{{
                        message.message }}
                      </div>
                    </div>
                    <div class="flex justify-between lg:block">
                      <div class="text-xs flex items-center justify-center gap-1 self-center pt-2 !invisible"><button
                          disabled="" class="dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400"><svg
                            stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24"
                            stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <polyline points="15 18 9 12 15 6"></polyline>
                          </svg></button><span class="flex-grow flex-shrink-0">1 / 1</span><button disabled=""
                          class="dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400">
                          <svg9 stroke="currentColor" fill="none" stroke-width="1.5" viewBox="0 0 24 24"
                            stroke-linecap="round" stroke-linejoin="round" class="h-3 w-3" height="1em" width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg9>
                        </button></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full h-32 md:h-48 flex-shrink-0"></div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2">
        <form
          class="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
          <div class="relative flex h-full flex-1 items-stretch md:flex-col">
            <div
              class="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
              <textarea @keypress.enter.exact.prevent="submitMessage" tabindex="0" data-id="request-:R1dd6:-0"
                style="max-height: 200px; height: 24px; overflow-y: hidden;" rows="1" placeholder="Send a message."
                class="m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent pl-2 md:pl-0"
                v-model="message"></textarea><button @click.prevent="submitMessage"
                class="absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40"
                disabled=""><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24"
                  stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-1" height="1em" width="1em"
                  xmlns="http://www.w3.org/2000/svg">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg></button>
            </div>
            <div class="">
              <div class="h-full flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"><button
                  class="btn relative btn-neutral border-0 md:border">
                  <div class="flex w-full items-center justify-center gap-2"><svg stroke="currentColor" fill="none"
                      stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"
                      height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <polyline points="1 4 1 10 7 10"></polyline>
                      <polyline points="23 20 23 14 17 14"></polyline>
                      <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                    </svg></div>
                </button></div>
            </div>
          </div>
        </form>
        <div class="px-3 pt-2 pb-3 text-center text-xs text-gray-600 dark:text-gray-300 md:px-4 md:pt-3 md:pb-6">
          <span>Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts. <a
              href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" target="_blank" rel="noreferrer"
              class="underline">ChatGPT Mar 23 Version</a></span>
        </div>
      </div>
    </main>
  </div>
</template>


<script setup lang="ts">
const message = ref("");
const messages = ref([
  {
    actor: 'AI',
    message: 'Hello, how can i help you?'
  },
  {
    actor: 'Human',
    message: 'Please tell me a story'
  },
  {
    actor: 'AI',
    message: 'Once upon a time....'
  },

])


const submitMessage = () => {
  if (message.value === '') return;

  messages.value.push({ actor: 'Human', message: message.value });
  message.value = '';
}
</script>
