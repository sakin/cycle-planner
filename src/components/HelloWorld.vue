<template>
  <div class="hello self-stretch flex-1 mt-8">
    <div class="container mx-auto flex">
      <form
        class="project-form flex items-center self-stretch content-block w-full mb-8"
        v-on:submit.prevent="addProject"
      >
        <label for="projectName" class="sr-only">Project Name</label>
        <input
          type="text"
          name="projectName"
          id="projectName"
          v-model="projectName"
          placeholder="Add a project"
          class="w-full p-4 "
          autocomplete="off"
        />

        <button type="submit" class="text-white bg-teal-500 px-3 py-2 rounded">Add</button>
      </form>
    </div>
    <div class="container mx-auto">
      <div class="w-2/3">
        <div class="projects content-block">
          <div class="projects-header grid grid-cols-3 gap-4">
            <span class="projects-header__name font-bold text-left">Project Name</span>
            <span class="projects-header__week font-bold"># of Weeks</span>
            <span class="projects-header__people font-bold">People</span>
          </div>
          <ul class="projects-list">
            <li v-for="project in projects" :key="project.id" class="block text-left py-3">
              <div class="grid grid-cols-3 gap-4">
                <div>
                  <span>{{ project.name }}</span>
                  <div class="flex">
                    <a href="">Add a member</a>
                  </div>
                </div>
                <div class="text-left">
                  <input
                    type="number"
                    @change="onWeeksChange"
                    v-model="project.numWeeks"
                    :data-id="project.id"
                    class="w-1/2"
                  />
                </div>
                <div class="text-left">
                  <button
                    @click="onEditMembers"
                    :data-id="project.id"
                    class="p-2 bg-teal-500 rounded text-white shadow-sm"
                  >
                    Edit Members
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="content-block mt-5">
          <h2 class="text-left">test data:</h2>
          <ul class="projects-list">
            <li v-for="project in projects" :key="project.id" class="block text-left">
              {{ project.name }}:{{ project.numWeeks }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <EditMembersModal :isOpen="isEditMemberModalOpen" />
  </div>
</template>

<script>
import EditMembersModal from "./EditMembersModal";
export default {
  name: "HelloWorld",
  components: {
    EditMembersModal
  },
  props: {
    msg: String
  },
  data() {
    return {
      projectName: "",
      projects: [],
      isEditMemberModalOpen: false,
      activeProject: {}
    };
  },
  methods: {
    addProject(event) {
      this.projects.push({
        name: this.projectName,
        id: new Date().getUTCMilliseconds(),
        numWeeks: 6
      });
      this.projectName = "";
    },
    onWeeksChange(event) {
      console.log(event, event.target.value);
      const id = event.target.getAttribute("data-id");

      const projectIndex = this.projects.findIndex(project => project.id === parseInt(id, 10));

      this.$set(this.projects, projectIndex, {
        ...this.projects[projectIndex],
        numWeeks: parseInt(event.target.value, 10)
      });

      // const currentProject = this.projects.find(project => {
      //   debugger;
      //   return project.id === parseInt(id, 10);
      // });
      // if (currentProject) {
      //   currentProject.weeks = event.target.value;
      //   this.projects = [...this.projects, currentProject];
      // }
      // console.log(this.projects, currentProject);
    },
    onEditMembers(event) {
      const id = event.target.getAttribute("data-id");
      const projectIndex = this.projects.findIndex(project => project.id === parseInt(id, 10));
      this.isEditMemberModalOpen = true;
      this.activeProject = this.projects[projectIndex];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-block {
  @apply bg-white rounded border-gray-300 p-6;
}
</style>
