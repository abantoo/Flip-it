<template>
  <AuthLayout
    title="Reset Password"
    subtitle="Enter your email to receive a secure password reset link. We'll help you get back into your account in seconds."
  >
    <form @submit.prevent="handleResetRequest" class="space-y-8 py-4">
      <BaseInput
        v-model="email"
        label="Email Address"
        type="email"
        placeholder="alex@example.com"
        :icon="PhEnvelope"
        required
      />

      <BaseButton type="submit" variant="primary" class="w-full py-4 text-lg" :loading="loading">
        Send Reset Link
      </BaseButton>
    </form>

    <template #footer>
      <p class="text-slate-600 font-medium text-center">
        Remembered your password?
        <RouterLink
          to="/login"
          class="text-primary font-black hover:text-slate-900 transition-colors ml-1 underline decoration-2 underline-offset-4"
        >
          Sign in here
        </RouterLink>
      </p>
    </template>
  </AuthLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PhEnvelope } from '@phosphor-icons/vue';
import AuthLayout from '../../components/auth/AuthLayout.vue';
import BaseInput from '../../components/ui/BaseInput.vue';
import BaseButton from '../../components/ui/BaseButton.vue';

const email = ref('');
const loading = ref(false);

const handleResetRequest = () => {
  loading.value = true;
  // Simulate API call
  setTimeout(() => {
    loading.value = false;
    alert('Reset link sent to ' + email.value + ' (simulated)');
  }, 1500);
};
</script>
