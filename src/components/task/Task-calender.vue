<template>
  <v-app>
      <Navbar/>
    <div>

      <v-content>
        <v-container fluid grid-list-md>
          <v-layout>
                <v-flex>
                  <v-sheet height="500">
                    <v-calendar
                      :now="today"
                      :value="today"
                      color="primary"
                    >
                      <template v-slot:day="{ date }">
                        <template v-for="event in eventsMap[date]">
                          <v-menu
                            :key="event.title"
                            v-model="event.open"
                            full-width
                            offset-x
                          >
                            <template v-slot:activator="{ on }">
                              <div
                                v-if="!event.time"
                                v-ripple
                                class="my-event"
                                v-on="on"
                                v-html="event.title"
                              ></div>
                            </template>
                            <v-card
                              color="grey lighten-4"
                              min-width="350px"
                              flat
                            >
                              <v-toolbar
                                color="primary"
                                dark
                              >
                                <v-btn icon>
                                  <v-icon>edit</v-icon>
                                </v-btn>
                                <v-toolbar-title v-html="event.title"></v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-btn icon>
                                  <v-icon>favorite</v-icon>
                                </v-btn>
                                <v-btn icon>
                                  <v-icon>more_vert</v-icon>
                                </v-btn>
                              </v-toolbar>
                              <v-card-title primary-title>
                                <span v-html="event.details"></span>
                              </v-card-title>
                              <v-card-actions>
                                <v-btn
                                  flat
                                  color="secondary"
                                >
                                  Cancel
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-menu>
                        </template>
                      </template>
                    </v-calendar>
                  </v-sheet>
                </v-flex>
              </v-layout>
        </v-container>

        <!-- Add Task Button  -->
        <v-btn :to="{name: 'AddTask'}"
          fab
          bottom
          right
          color="indigo"
          dark
          fixed
        >
        <v-icon>add</v-icon>
        </v-btn>

      </v-content>
    </div>
  </v-app>

</template>

<script>
import Navbar from '@/components/navbar/Navbar'
import db from '@/firebase/init'
import moment from 'moment'
export default {
  name:'Task',
  components: {
    Navbar
  },
  data(){
    return{
      date:[], 
      today: '2019-05-18',
      events: [
        {
          title: 'Meeting',
          details: 'Going to the business meeting',
          date: '2019-05-12',
          open: false
        },          
        {
          title: 'Vacation',
          details: 'Going to the beach!',
          date: '2019-05-13',
          open: false
        },       
      ]
    }
  },   
  computed: {
      // convert the list of events into a map of lists keyed by date
      eventsMap () {
        const map = {}
        this.events.forEach(e => (map[e.date] = map[e.date] || []).push(e))
        return map
      }
  },
  methods:{      
      open (event) {
        alert(event.title)
      }
  },
  
}
</script>

<style>
tbody a{
  font-size: 13px;
  color:black;
  text-decoration: underline;
}

.my-event {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 2px;
    background-color: #1867c0;
    color: #ffffff;
    border: 1px solid #1867c0;
    width: 100%;
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
    margin-bottom: 1px;
  }
</style>
