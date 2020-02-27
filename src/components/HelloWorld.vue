<template>
  <div class="hello">
    <form class="project-form " v-on:submit.prevent="addProject">
      <h2>Add Project Name</h2>
      <label for="projectName">Project Name</label>
      <input type="text" name="projectName" id="projectName" v-model="projectName" />

      <button type="submit">Add</button>
    </form>

    <div class="projects">
      <div class="projects-header">
        <span class="projects-header__name">Project Name</span>
        <span class="projects-header__week"># of Weeks</span>
        <span class="projects-header__people">People</span>
      </div>
      <ul class="projects-list">
        <li v-for="project in projects" :key="project.id" class="block">
          {{ project.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      projectName: "",
      projects: []
    };
  },
  methods: {
    addProject: function(event) {
      console.log("hi?");
      this.projects.push({ name: this.projectName, id: new Date().getUTCMilliseconds() });
      this.projectName = "";
      console.log(this.projects);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
