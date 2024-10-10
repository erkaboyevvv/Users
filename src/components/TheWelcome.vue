<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div class="max-w-4xl mx-auto p-6">
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon class="w-8 h-8 text-blue-500" />
      </template>
      <template #heading>
        <h2 class="text-xl font-semibold text-gray-800">Documentation</h2>
      </template>
      <p class="text-gray-600">
        Vue’s
        <a
          href="https://vuejs.org/"
          target="_blank"
          rel="noopener"
          class="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >official documentation</a
        >
        provides you with all information you need to get started.
      </p>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <ToolingIcon class="w-8 h-8 text-green-500" />
      </template>
      <template #heading>
        <h2 class="text-xl font-semibold text-gray-800">Tooling</h2>
      </template>
      <p class="text-gray-600">
        This project is served and bundled with
        <a
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener"
          class="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >Vite</a
        >. The recommended IDE setup is
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener"
          class="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >VSCode</a
        >
        +
        <a
          href="https://github.com/johnsoncodehk/volar"
          target="_blank"
          rel="noopener"
          class="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >Volar</a
        >. More instructions are available in <code>README.md</code>.
      </p>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <EcosystemIcon class="w-8 h-8 text-purple-500" />
      </template>
      <template #heading>
        <h2 class="text-xl font-semibold text-gray-800">Ecosystem</h2>
      </template>
      <p class="text-gray-600">
        Get official tools and libraries for your project:
        <a
          href="https://pinia.vuejs.org/"
          target="_blank"
          rel="noopener"
          class="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >Pinia</a
        >,
        <a
          href="https://router.vuejs.org/"
          target="_blank"
          rel="noopener"
          class="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >Vue Router</a
        >, and
        <a
          href="https://github.com/vuejs/devtools"
          target="_blank"
          rel="noopener"
          class="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >Vue Dev Tools</a
        >.
      </p>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <CommunityIcon class="w-8 h-8 text-red-500" />
      </template>
      <template #heading>
        <h2 class="text-xl font-semibold text-gray-800">Community</h2>
      </template>
      <p class="text-gray-600">
        Got stuck? Ask your question on
        <a
          href="https://chat.vuejs.org"
          target="_blank"
          rel="noopener"
          class="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >Vue Land</a
        >
        or
        <a
          href="https://stackoverflow.com/questions/tagged/vue.js"
          target="_blank"
          rel="noopener"
          class="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >StackOverflow</a
        >.
      </p>
    </WelcomeItem>

    <WelcomeItem>
      <template #icon>
        <SupportIcon class="w-8 h-8 text-yellow-500" />
      </template>
      <template #heading>
        <h2 class="text-xl font-semibold text-gray-800">Support Vue</h2>
      </template>
      <p class="text-gray-600">
        As an independent project, Vue relies on community backing for its sustainability. You can
        help us by
        <a
          href="https://vuejs.org/sponsor/"
          target="_blank"
          rel="noopener"
          class="text-blue-500 hover:text-blue-700 transition-colors duration-200"
          >becoming a sponsor</a
        >.
      </p>
    </WelcomeItem>
  </div>
</template>
