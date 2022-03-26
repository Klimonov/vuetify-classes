<template xmlns="http://www.w3.org/1999/html">
  <div>
    <h1 class="text-center my-10 font-large">All Vuetify Classes in one place</h1>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          solo
          single-line
          hide-details
          clearable
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="classes"
        :search="search"
        sort-by="class"
        hide-default-footer
        group-by="category"
        :items-per-page="-1"
      >
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            @click="copyClass(item)"
          >
            mdi-content-copy
          </v-icon>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import classes from '@/static/classes'

export default {
  name: 'HomePage',
  data() {
    return {
      search: '',
      headers: [
        { text: 'Class', align: 'start', value: 'class', sortable: false },
        { text: 'Properties', align: 'start', value: 'property', sortable: false },
        { text: 'Category', value: 'category', align: 'right' },
        { value: 'actions', sortable: false }
      ],
      classes: classes
    }
  },
  methods: {
    copyClass(item) {
      console.log(this.classes)
      console.log(item.class)
    }
  }
}
</script>

<style lang="sass">
  .v-row-group__header
    td button:not(:first-child)
      display: none
  tr
    td
      color: #574ee6
    td:first-child
      color: #10a5e9
</style>
