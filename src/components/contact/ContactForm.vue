<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <BaseInput
        v-model="form.name"
        label="Full Name"
        placeholder="John Doe"
        id="contact-name"
        required
      />
      <BaseInput
        v-model="form.email"
        type="email"
        label="Email Address"
        placeholder="john@example.com"
        id="contact-email"
        required
      />
    </div>

    <BaseTextarea
      v-model="form.message"
      label="Message"
      placeholder="Your message here..."
      id="contact-message"
      :rows="3"
      required
    />

    <div class="flex items-center justify-end pt-2">
      <BaseButton type="submit" :disabled="isSubmitting" size="md">
        <PhPaperPlaneTilt v-if="!isSubmitting" :size="18" weight="bold" />
        <span
          v-else
          class="w-4 h-4 border-2 border-slate-200 border-t-white rounded-full animate-spin"
        ></span>
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </BaseButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { PhPaperPlaneTilt } from '@phosphor-icons/vue';
import BaseInput from '../ui/BaseInput.vue';
import BaseTextarea from '../ui/BaseTextarea.vue';
import BaseButton from '../ui/BaseButton.vue';

const isSubmitting = ref(false);
const form = reactive({
  name: '',
  email: '',
  message: '',
});

const handleSubmit = async () => {
  isSubmitting.value = true;
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.log('Form submitted:', form);
  isSubmitting.value = false;
  // Reset form
  Object.assign(form, {
    name: '',
    email: '',
    message: '',
  });
  alert('Thank you for your message! We will get back to you soon.');
};
</script>
