<template>
  <AuthLayout 
    title="Welcome Back" 
    :subtitle="`Securely sign in to your ${appConfig.appName} account and continue your journey`"
  >
    <form @submit.prevent="handleLogin" class="space-y-6 py-2">
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

      <div class="flex items-center justify-between">
        <label class="flex items-center gap-2 cursor-pointer group">
          <input type="checkbox" class="w-4 h-4 border-2 border-slate-900 rounded-none checked:bg-primary transition-colors" />
          <span class="text-sm font-bold text-slate-700 group-hover:text-slate-900">Remember me</span>
        </label>
        <RouterLink 
          to="/forgot-password" 
          class="text-sm font-bold text-primary hover:text-slate-900 transition-colors underline decoration-2 underline-offset-4"
        >
          Forgot password?
        </RouterLink>
      </div>

      <BaseButton 
        type="submit" 
        variant="primary" 
        class="w-full py-4 text-lg"
        :loading="loading"
      >
        Sign In
      </BaseButton>

      <div class="relative py-4">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t-2 border-slate-100"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-3 bg-white text-slate-500 font-bold uppercase tracking-wider">Or continue with</span>
        </div>
      </div>

      <SimpleGoogleButton @click="handleGoogleLogin" />
    </form>

    <template #footer>
      <p class="text-slate-600 font-medium">
        Don't have an account? 
        <RouterLink 
          to="/register" 
          class="text-primary font-black hover:text-slate-900 transition-colors ml-1 underline decoration-2 underline-offset-4"
        >
          Create an account
        </RouterLink>
      </p>
    </template>
  </AuthLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PhEnvelope, PhLock } from '@phosphor-icons/vue';
import AuthLayout from '../../components/auth/AuthLayout.vue';
import BaseInput from '../../components/ui/BaseInput.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
import SimpleGoogleButton from '../../components/ui/SimpleGoogleButton.vue';
import {
  appConfig,
} from '../../config';

const email = ref('');
const password = ref('');
const loading = ref(false);

const handleLogin = () => {
  loading.value = true;
  // Simulate API call
  setTimeout(() => {
    loading.value = false;
    alert('Logged in successfully (simulated)');
  }, 1500);
};

const handleGoogleLogin = () => {
  alert('Google login initiated');
};
</script>
