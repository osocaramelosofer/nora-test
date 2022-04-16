<script setup>
import Icon from "./utilities/Icon.vue";
</script>
<template>
  <div class="dropdown sm:w-24">
    <input class="dropdown-toggle" type="text" />
    <div class="dropdown-text">
      <span class="text-bold text-nora-gray-300">
        <span class="text-sm text-nora-gray-300">Sort by:</span>
        MostUpvotes</span
      >
    </div>
    <ul class="dropdown-content">
      <li class="border-b border-gray-200"><span class="ml-5">Settings</span></li>
      <li class="border-b border-gray-200"><span class="ml-5">Projects</span></li>
      <li class="border-b border-gray-200"><span class="ml-5">Log out</span></li>
    </ul>
  </div>
</template>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
  text-align: left;
  min-width: 200px;
}

.dropdown-text {
  cursor: pointer;
  position: absolute;
  text-indent: 10px;
  line-height: 32px;
  width: 100%;

}

.dropdown-text:after {
  position: absolute;
  right: 6px;
  top: 15px;
  content: "";
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 5px 4px 0 4px;
  border-color: #fff transparent transparent transparent;
}

.dropdown-content a {
  color: #333;
  text-shadow: 0 1px #fff;
}

.dropdown-toggle {
  font-size: 0;
  z-index: 1;
  cursor: pointer;
  position: absolute;
  top: 0;
  border: none;
  padding: 0;
  margin: 0 0 0 1px;
  background: transparent;
  text-indent: -10px;
  height: 34px;
  width: 100%;
}

.dropdown-toggle:focus {
  outline: 0;
}

.dropdown-content {
  -webkit-transition: all 0.25s ease;
  -moz-transition: all 0.25s ease;
  -ms-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
  list-style-type: none;
  position: absolute;
  top: 32px;
  padding: 0;
  margin: 0;
  opacity: 0;
  visibility: hidden;
  border-radius: 5px;
  text-indent: 10px;
  line-height: 32px;
  background-color: #fff;
  width: 200px;

  box-shadow: -10px 25px 42px -16px rgba(0, 0, 0, 0.43);
  -webkit-box-shadow: -10px 25px 42px -16px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: -10px 25px 42px -16px rgba(0, 0, 0, 0.43);
}

.dropdown-content span {
  display: block;
}


span:hover {
  color: #AD1FEA;
}

/* .dropdown-toggle:hover ~ .dropdown-text,
.dropdown-toggle:focus ~ .dropdown-text {
  background-color: #e8e8e8;
} */

.dropdown-toggle:focus ~ .dropdown-text {
  z-index: 2;
}

.dropdown-toggle:focus ~ .dropdown-text:after {
  border-width: 0 4px 5px 4px;
  border-color: transparent transparent #fff transparent;
}

.dropdown-content:hover,
.dropdown-toggle:focus ~ .dropdown-content {
  opacity: 1;
  visibility: visible;
  top: 42px;
}
</style>