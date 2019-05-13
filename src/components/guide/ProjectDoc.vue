<template>
  <v-app>
    <Navbar/>
    <div>
      <v-content>
          <v-container>
            <v-layout align-center>
              <v-flex>
                <h1>Projects</h1>
                <p>List of all projects</p>
                <v-divider class="my-3"></v-divider>

                <img width="100%" src="./../../assets/documentation/project.png"><br>
                <h3>Features</h3>
                <div class="list">
                  <li>Display all Projects</li>
                  <li>Search Projects</li>
                  <li>Edit Project</li>
                  <li>Delete Project</li>
                  <li>View Each Project</li>
                  <li>Project Updates</li>
                </div>

              </v-flex>
            </v-layout>
          </v-container>
      </v-content>
    </div>
  </v-app>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
export default {
  name:'ProjectkDoc',
  components: {
     Navbar
  },
}
</script>

<style>
.list{
  margin-left: 8px;
}

</style>
