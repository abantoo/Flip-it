<template>
  <div class="space-y-2">
    <label v-if="label" :for="id" class="block text-sm font-medium text-slate-600 ml-1">
      {{ label }}
    </label>
    <div class="relative group">
      <textarea
        :id="id"
        :value="modelValue"
        :placeholder="placeholder"
        :rows="rows"
        :required="required"
        class="w-full bg-white border border-slate-200 text-slate-900 px-4 py-3 rounded-xl outline-none transition-all duration-300 focus:border-amber-500/50 focus:ring-4 focus:ring-amber-500/10 placeholder:text-slate-400 resize-none"
        @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      ></textarea>
      <!-- Active Border Glow -->
      <div
        class="absolute inset-0 rounded-xl border border-amber-500/0 group-focus-within:border-amber-500/30 transition-all duration-300 pointer-events-none"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string;
  label?: string;
  placeholder?: string;
  id?: string;
  rows?: number;
  required?: boolean;
}

withDefaults(defineProps<Props>(), {
  rows: 4,
  required: false,
});

defineEmits(['update:modelValue']);
</script>
