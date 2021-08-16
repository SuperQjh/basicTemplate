<template>
  <div class="excel">
    <el-table
      style="width: 100%"
      border
      :data="excelData">
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
      <el-table-column label="性别">
        <template slot-scope="scope">
          {{ scope.row.sex === 1 ? '男' : '女' }}
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" style="margin-top: 10px" @click="exportTable">导出表格</el-button>
  </div>
</template>
<script>

export default {
  name: 'Excel',
  data() {
    return {
      excelData: [
        {
          name: 'A',
          age: 20,
          sex: 1,
        },
        {
          name: 'B',
          age: 21,
          sex: 1,
        },
        {
          name: 'C',
          age: 22,
          sex: 2,
        },
        {
          name: 'D',
          age: 23,
          sex: 2,
        }
      ]
    }
  },
  methods:{
    exportTable() {
      console.log(1);
    }
  },
  created() {
  }
}
</script>
<style scoped>
  .excel {
    margin: 10px;
  }
</style>