<template>
  <div class="call-out not-prose bg-blue-50 p-4 rounded-lg text-blue-950 border-l-4 border-blue-100 text-sm"><slot /></div>
</template>
<style>
.call-out a {
  text-decoration: underline;
  font-weight: 600;
  &:hover,
  &:focus {
    text-decoration: none;
  }
}
</style>
