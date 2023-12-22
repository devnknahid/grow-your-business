// id return function getSingleId
function getSingleId(singleId) {
   const selcetSingleId = document.getElementById(singleId);
   return selcetSingleId;
};

// clsss all return Function getMultipleClass
function getMultipleClass(multipleClass) {
   const selectMultipleClass = document.querySelectorAll(multipleClass);
   return selectMultipleClass;
};
// query_select  return Function getSingleClass
function getSingleClass(singleClass) {
   const selectSingleClass = document.querySelector(singleClass);
   return selectSingleClass;
};

// get id and add multipleClassById
function multipleClassById(elementId, FClass, SClass, TClass, FrtClass, fiftClass) {
   const element = document.getElementById(elementId);
   element.classList.add(FClass, SClass, TClass, FrtClass, fiftClass);
   return element;
};
// get id and remove class
function removeClassById(elementId, FClass, SClass, TClass, FrtClass, fiftClass) {
   const element = document.getElementById(elementId);
   element.classList.remove(FClass, SClass, TClass, FrtClass, fiftClass);
   return element;
};