<template>
  <div class="w-full">
    <label 
      v-if="label" 
      :for="id" 
      class="block text-sm font-bold text-slate-700 mb-2 ml-1"
    >
      {{ label }}
    </label>
    
    <div class="relative group">
      <!-- Shadow background -->
      <div 
        class="absolute inset-0 bg-slate-900 translate-x-1 translate-y-1 transition-transform group-focus-within:translate-x-0 group-focus-within:translate-y-0"
      ></div>
      
      <!-- Input container -->
      <div class="relative flex items-center bg-white border-2 border-slate-900 px-4 py-3">
        <component 
          v-if="icon" 
          :is="icon" 
          :size="20" 
          class="text-slate-500 mr-3"
        />
        
        <input
          :id="id"
          :type="inputType"
          :value="modelValue"
          :placeholder="placeholder"
          :required="required"
          class="w-full bg-transparent outline-none text-slate-900 placeholder:text-slate-400 font-medium"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
        
        <!-- Toggle Password Visibility -->
        <button
          v-if="type === 'password'"
          type="button"
          class="ml-2 p-1 text-slate-500 hover:text-slate-900 transition-colors"
          @click="showPassword = !showPassword"
        >
          <component :is="showPassword ? PhEyeSlash : PhEye" :size="20" />
        </button>
      </div>
    </div>
    
    <p v-if="error" class="mt-2 text-xs font-bold text-red-500 ml-1">
      {{ error }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { PhEye, PhEyeSlash } from '@phosphor-icons/vue';

interface Props {
  modelValue: string;
  label?: string;
  placeholder?: string;
  type?: string;
  id?: string;
  error?: string;
  required?: boolean;
  icon?: any;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  id: () => `input-${Math.random().toString(36).substr(2, 9)}`,
});

defineEmits(['update:modelValue']);

const showPassword = ref(false);

const inputType = computed(() => {
  if (props.type === 'password') {
    return showPassword.value ? 'text' : 'password';
  }
  return props.type;
});
</script>
