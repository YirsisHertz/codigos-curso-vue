<template>
  <div>
    <nav>
      <div class="nav-wrapper light-blue">
        <router-link class="brand-logo" to="/">Proyectos</router-link>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"
          ><i class="material-icons">menu</i></a
        >
        <ul class="right hide-on-med-and-down">
          <li>
            <router-link v-if="!sesion" to="/">Register</router-link>
          </li>
          <li>
            <router-link v-if="!sesion" to="/login">LogIn</router-link>
          </li>
          <li>
            <router-link
              v-if="sesion"
              to="/proyectos"
              class="waves-effect waves-light btn red lighten"
            >
              Proyectos
            </router-link>
          </li>
          <li>
            <router-link
              v-if="sesion"
              to="/"
              @click="cerrarSesion"
              class="waves-effect waves-light btn red lighten"
            >
              Cerrar Sesion
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <li>
        <router-link v-if="!sesion" to="/">Register</router-link>
      </li>
      <li>
        <router-link v-if="!sesion" to="/login">LogIn</router-link>
      </li>
      <li>
        <router-link v-if="sesion" to="/proyectos">
          Proyectos
        </router-link>
      </li>

      <li>
        <router-link
          v-if="sesion"
          to="/"
          @click="cerrarSesion"
          class="waves-effect waves-light btn red lighten"
        >
          Cerrar Sesion
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted() {
    M.AutoInit();
  },
  methods: {
    cerrarSesion() {
      localStorage.removeItem("user");
    },
  },
  computed: {
    sesion() {
      const user = localStorage.getItem("user");
      if (user) {
        return true;
      }

      return false;
    },
  },
};
</script>
