<script setup>
const props = defineProps({
  modelValue: { type: String, required: true },
  label: { type: String, required: true },
  inputId: { type: String, required: true },
  name: { type: String, required: true },
  type: { type: String, default: 'text' },
  isValid: { type: Boolean, default: undefined },
  errorMessage: { type: String, default: '' },
  required: { type: Boolean, default: false },
})

const emit = defineEmits(['update:modelValue', 'blur'])
</script>

<template>
  <div class="space-y-1">
    <label class="text-sm" :for="inputId">{{ label }}<span v-if="required" aria-hidden="true"> *</span></label>
    <div>
      <component
        :is="type === 'textarea' ? 'textarea' : 'input'"
        :id="inputId"
        :aria-describedby="isValid === false ? `${inputId}-invalid` : undefined"
        :aria-invalid="isValid === false || undefined"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        @blur="emit('blur')"
        :name="name"
        :type="type !== 'textarea' ? type : undefined"
        class="bg-white w-full pr-4 pl-2 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        :class="{ 'border-red-600 invalid': isValid === false }"
      />
      <small
        v-if="isValid === false && errorMessage"
        :id="`${inputId}-invalid`"
        role="alert"
        class="animate-entry block text-red-600"
      >{{ errorMessage }}</small>
    </div>
  </div>
</template>
