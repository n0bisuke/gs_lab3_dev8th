<template>
  <footer class="row">
    <nav class="navbar navbar-toggleable-md navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="/">PIZZA PLANET</a>
      <ul class="navbar-nav">
        <router-link :to="{ name: 'homeLink'}" tag="li"><a class="nav-link">home</a></router-link>
        <router-link :to="{ name: 'aboutLink'}" tag="li"><a class="nav-link">about</a></router-link>
        <router-link :to="{ name: 'adminLink'}" tag="li"><a class="nav-link">admin</a></router-link>
      </ul>
    </nav>
  </footer>
</template>
