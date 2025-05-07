<template>
  <div class="space-y-2">
    <label v-if="label" :for="id" class="block text-sm font-medium text-slate-600 ml-1">
      {{ label }}
    </label>
    <div class="relative group">
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        class="w-full bg-white border border-slate-200 text-slate-900 px-4 py-3 rounded-xl outline-none transition-all duration-300 focus:border-amber-500/50 focus:ring-4 focus:ring-amber-500/10 placeholder:text-slate-400"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <!-- Active Border Glow -->
      <div class="absolute inset-0 rounded-xl border border-amber-500/0 group-focus-within:border-amber-500/30 transition-all duration-300 pointer-events-none"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string | number;
  label?: string;
  placeholder?: string;
  type?: string;
  id?: string;
  required?: boolean;
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  required: false
});

defineEmits(['update:modelValue']);
</script>
