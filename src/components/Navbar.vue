<template>
  <div :class="$style.navbar">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">CRUD</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <ul>
          <li>
            <router-link to="/posts">Posts</router-link>
          </li>
        </ul>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: "Navbar"
}
</script>
<style module>
.navbar {
  margin-bottom: 30px;
}
.navbar ul {
  margin-bottom: 0;
}
ul {
  display: flex;
  flex: 1;
  justify-content: flex-end;
  margin-right: -20px;
  margin-left: -20px;
}
li {
  padding-right: 20px;
  padding-left: 20px;
}
ul li a {
  color: #fff;
}
</style>
