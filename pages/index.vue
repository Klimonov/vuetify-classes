<template>
  <div>
    <h1 class="text-center my-10 font-large">All Vuetify Classes in one place</h1>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          outlined
          hide-details
          clearable
        />
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="classes"
        :search="search"
        sort-by="class"
        group-by="category"
        :items-per-page="100"
      >
        <template v-slot:item.class="{ item }">
          <span class="item-text">{{ item.class }}</span>
          <v-icon class="icon" small @click="copy(item.class)">
            mdi-content-copy
          </v-icon>
        </template>
        <template v-slot:item.property="{ item }">
          <span class="item-text">{{ item.property }}</span>
          <span
            v-if="item.property.startsWith('#')"
            class="color-block"
            :style="`background-color: ${item.property}`"
          />
          <v-icon class="icon" small @click="copy(item.property)">
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
      classes,
      search: '',
      headers: [
        { text: 'Class', align: 'start', value: 'class', sortable: false },
        { text: 'Properties', align: 'start', value: 'property', sortable: false },
        { text: 'Category', value: 'category', align: 'right' },
        { value: 'actions', sortable: false }
      ]
    }
  },
  methods: {
    copy(text) {
      navigator.clipboard.writeText(text)
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
    white-space: pre-line

  td:first-child
    color: #10a5e9

  .text-start
    padding-top: 5px !important
    padding-bottom: 5px !important

    &:first-child
      width: 300px
    & .icon
      margin-left: 5px
      visibility: hidden

  &:hover .icon
    visibility: visible

.item-text
  display: inline-block
  min-width: 70px
  line-height: 24px

.color-block
  display: inline-block
  height: 20px
  width: 50px
  margin-bottom: -5px
  margin-left: 5px
</style>
