<template>
  <div>     
      <ag-grid-vue
        style="width: 500px; height: 500px;"
        class="ag-theme-balham"
        :columnDefs="columnDefs"
        :rowData="gridData"
        :gridOptions="gridOptions"        
        @rowDoubleClicked="getDetails">
      </ag-grid-vue>
  </div>
</template>

<script>
import {AgGridVue} from "@ag-grid-community/vue";
import {AllCommunityModules} from '@ag-grid-community/all-modules';

export default {
  name: 'Grid',
  components:{ AgGridVue },
  props: {
    gridData: Array,
    columns: Array,
    filterKey: String,
    gridColumns: null
  },
  data: function () {
    return {      
      columnDefs: null,
      modules: AllCommunityModules,
      gridOptions: {
        rowHeight : 30,        
        headerHeight : 30,
        pagination : false,
        paginationAutoPageSize : false,
        alwaysShowVerticalScroll: true
      }
    }
  },
  methods: {
    getDetails(event){
      this.$emit("getHistory", event.data.id);
    }
  },
  beforeMount() {
      //TODO: get codes from param gridColumns
      this.columnDefs = [
          {headerName: 'Name', field: 'name'},
          {headerName: 'Symbol', field: 'symbol'}
      ];
  }
}
</script>


<style lang="scss">
  @import "../../node_modules/ag-grid/dist/styles/ag-grid.css";
  @import "../../node_modules/ag-grid/dist/styles/ag-theme-balham.css";

  
  .ag-theme-balham .ag-paging-panel {
    float: right;
  }

  .ag-theme-balham .ag-paging-button {
    border: none;
    background: #fff;
  }

  .ag-theme-balham .ag-paging-row-summary-panel {
    text-align: right;
  }

</style>
