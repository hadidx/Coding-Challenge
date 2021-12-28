<template>
  <div>
    <div style = 'margin: auto;width: 60%'>
      <label style = 'display: block'>Name Filter: </label>
      <InputText id="name" type="text" v-model = 'nameFilter'/>
      <label style = 'display: block'>Email Filter: </label>
      <InputText v-model = 'emailFilter' name = 'email' id="email" type="email" />
      <p><Button label="Search" @click = 'FilterCustomers(1,true)'></Button></p>
    </div>
    <DataTable :value="data">
      <Column field="id" header="Id"></Column>
      <Column field="first_name" header="First Name"></Column>
      <Column field="last_name" header="Last Name"></Column>
      <Column field="email" header="Email"></Column>
      <Column field="role" header="Role"></Column>
    </DataTable>
    <!--<div>
      <button class = 'other' @click= 'FilterCustomers(1,false)' >&lt;&lt;</button>
      <template  v-for = 'n in 5' :key='n' >
        <button  class = 'other' v-if = 'currentpage-(5-n+1)>0' @click= 'FilterCustomers(currentpage-(5-n+1),false)' >{{currentpage-(5-n+1)}}</button>
      </template>
      <template  v-for = 'n in 5' :key='n' >
        <button  class = 'active' v-if = 'n==1' @click= 'FilterCustomers(n+currentpage-1,false)' >{{n+currentpage-1}}</button>
        <button  class = 'other' v-if = 'n+currentpage<=pages' @click= 'FilterCustomers(n+currentpage,false)' >{{n+currentpage}}</button>
      </template>
      <button class = 'other' @click= 'FilterCustomers(pages,false)' >&gt;&gt;</button>
  </div>-->
  <Paginator class = 'p-paginator' v-model:first="first" v-model:rows = 'entriesPerPage' :totalRecords="Totalpages"
                   :rowsPerPageOptions="[10,50,100]" @click = 'FilterCustomers(first+1,false)'>
    <template #start>
    </template>
    <template #end>
      <Button type="button" icon="pi pi-search" @click = 'Reset();FilterCustomers(first+1,false)' />
    </template>
  </Paginator>
  </div>
</template>

<script>
import adminServe from '../services/admin_serve'

export default {
  data() {
    return {
        nameFilter : '',
        emailFilter : '',
        lastNameFilter : '',
        lastEmailFilter : '',
        data: [],
        message: "",
        Totalpages: 0,
        currentpage:0,
        first:0,
        entriesPerPage:10
    };
  },
  methods:
  {
    FilterCustomers(firstRecord,update)
    {
        if(update)
        {
          this.lastNameFilter = this.nameFilter
          this.lastEmailFilter = this.emailFilter
        }
        adminServe.getCustomerList(this.entriesPerPage,Math.floor(firstRecord/this.entriesPerPage+1),this.lastNameFilter,this.lastEmailFilter).then(
        (response)=>{
          this.data = response.data.data
          this.Totalpages = response.data.total
          this.currentpage = firstRecord
        },
        (error)=>{ this.message = error.response.data.error }
      )
        console.log(this.data)
    },
    Reset()
    {
      this.first = 1
    }
  },
};
</script>

<style>
.paginator
{
   font-size: 30% !important;
}
</style>
