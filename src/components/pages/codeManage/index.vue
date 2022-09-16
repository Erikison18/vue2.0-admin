<template>
  <code-manage 
    :api="{
      fetchList: fetchListCode, 
      fetchRangeList,
      fetchUsersList,
      deleteItem,
      putItem,
      postRule,
      putRule,
      fetchRuleInfo,
      fetchDefaultImage,
    }"
  ></code-manage>
  <!-- :upload="{
    uploadHeaders: { Authorization: token},
    uploadAction: baseUrl,
  }" -->
</template>

<script>
export default {
  name: "CodeManageComponent",
  data() {
    return {
      token: "Bearer 74a94182-c64a-4fb7-822f-eedef47515fb",
      baseUrl: 'http://192.168.100.126:8030',
    };
  },
  methods: {
    async fetchRangeList() {
      try {
        const response = await fetch(
          `${this.baseUrl}/recognize/rule/range`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: this.token
            },
          }
        );
        const res = await response.json();
        if (!res.data) throw "暂无数据";
        return res.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async fetchListCode(data, query) {
      try {
        let params = {
          pageNumber: query.pageNumber || 1,
          pageSize: query.pageSize || 10
        };

        const response = await fetch(
          `${this.baseUrl}/recognize/rule?pageNumber=${params.pageNumber}&pageSize=${params.pageSize}&keyWords=${data.keyWords}`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: this.token
            },
            // body: JSON.stringify(data)
          }
        );
        const res = await response.json();
        if (!res.data) throw "暂无数据";
        return res.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async deleteItem(id) {
      try {
        if (!id) throw "删除失败，缺少规则id!";

        const response = await fetch(
          `${this.baseUrl}/recognize/rule/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
              Authorization: this.token
            }
          }
        );
        const res = await response.json();
        return res;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async putItem(data) {
      try {
        if (!data.ruleNo) throw "更新失败，缺少规则id!";

        const response = await fetch(
          `${this.baseUrl}/recognize/rule/status`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
              Authorization: this.token
            },
            body: JSON.stringify(data)
          }
        );
        const res = await response.json();
        if (res.code !== 0) throw res.msg;
        return res;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async postRule(data) {
      try {
        const response = await fetch(
          `${this.baseUrl}/recognize/rule`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              Authorization: this.token
            },
            body: JSON.stringify(data)
          }
        );
        const res = await response.json();
        return res;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async putRule(data) {
      try {
        if (!data.ruleNo) throw "更新失败，缺少规则id!";

        const response = await fetch(
          `${this.baseUrl}/recognize/rule`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
              Authorization: this.token
            },
            body: JSON.stringify(data)
          }
        );
        const res = await response.json();
        return res;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async fetchRuleInfo(ruleNo) {
      try {
        if (!ruleNo) throw "更新失败，缺少规则id!";

        const response = await fetch(
          `${this.baseUrl}/recognize/rule/baseInfo?ruleNo=${ruleNo}`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: this.token
            },
          }
        );
        const res = await response.json();
        if (!res.data) throw "暂无数据";
        return res.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async fetchDefaultImage() {
      try {
        const response = await fetch(
          `${this.baseUrl}/recognize/default/guide/image`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: this.token
            },
          }
        );
        const res = await response.json();
        if (!res.data) throw "暂无数据";
        return res.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
    async fetchUsersList() {
      try {
        const response = await fetch(
          `${this.baseUrl}/api/wework/users`,
          {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: this.token
            },
          }
        );
        const res = await response.json();
        if (!res.data) throw "暂无数据";
        return res.data;
      } catch (error) {
        return Promise.reject(error);
      }
    },
  },
}
</script>
