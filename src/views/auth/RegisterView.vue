<template>
  <AuthLayout
    title="Create Account"
    :subtitle="`Join the ${appConfig.appName} community and unlock exclusive tech deals`"
  >
    <form @submit.prevent="handleRegister" class="space-y-6 py-2">
      <BaseInput
        v-model="name"
        label="Full Name"
        type="text"
        placeholder="Alex Thompson"
        :icon="PhUser"
        required
      />

      <BaseInput
        v-model="email"
        label="Email Address"
        type="email"
        placeholder="alex@example.com"
        :icon="PhEnvelope"
        required
      />

      <BaseInput
        v-model="password"
        label="Password"
        type="password"
        placeholder="••••••••"
        :icon="PhLock"
        required
      />

      <div class="space-y-4">
        <label class="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            required
            class="mt-1 w-5 h-5 border-2 border-slate-900 rounded-none checked:bg-brand-primary transition-colors"
          />
          <span class="text-sm font-medium text-slate-600 group-hover:text-slate-900 leading-tight">
            I agree to the
            <a href="#" class="font-bold text-slate-900 underline">Terms of Service</a> and
            <a href="#" class="font-bold text-slate-900 underline">Privacy Policy</a>
          </span>
        </label>
      </div>

      <BaseButton type="submit" variant="secondary" class="w-full py-4 text-lg" :loading="loading">
        Sign Up
      </BaseButton>

      <div class="relative py-4">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t-2 border-slate-100"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-3 bg-white text-slate-500 font-bold uppercase tracking-wider"
            >Or sign up with</span
          >
        </div>
      </div>

      <SimpleGoogleButton @click="handleGoogleLogin" />
    </form>

    <template #footer>
      <p class="text-slate-600 font-medium">
        Already have an account?
        <RouterLink
          to="/login"
          class="text-brand-primary font-black hover:text-slate-900 transition-colors ml-1 underline decoration-2 underline-offset-4"
        >
          Sign in here
        </RouterLink>
      </p>
    </template>
  </AuthLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PhUser, PhEnvelope, PhLock } from '@phosphor-icons/vue';
import AuthLayout from '../../components/auth/AuthLayout.vue';
import BaseInput from '../../components/ui/BaseInput.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
import SimpleGoogleButton from '../../components/ui/SimpleGoogleButton.vue';
import { appConfig } from '../../config';

const name = ref('');
const email = ref('');
const password = ref('');
const loading = ref(false);

const handleRegister = () => {
  loading.value = true;
  // Simulate API call
  setTimeout(() => {
    loading.value = false;
  }, 1500);
};

const handleGoogleLogin = () => {
  alert('Google login initiated');
};
</script>
