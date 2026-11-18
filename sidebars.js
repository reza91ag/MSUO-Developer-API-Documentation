module.exports = { docs: [
  "system-overview",
  {
    "type": "category",
    "label": "Endpoints",
    "link": {
      "type": "doc",
      "id": "endpoints"
    },
    "items": [
      "endpoints/ingress",
      "endpoints/deploy"
    ]
  },
  {
    "type": "category",
    "label": "Classes & APIs",
    "link": {
      "type": "doc",
      "id": "classes-and-apis"
    },
    "items": [
      {
        "type": "category",
        "label": "Data",
        "link": {
          "type": "doc",
          "id": "classes-and-apis/data"
        },
        "items": [
          {
            "type": "category",
            "label": "Data Primitive (DUP)",
            "link": {
              "type": "doc",
              "id": "classes-and-apis/data/data-primitive"
            },
            "items": [
              "classes-and-apis/data/data-primitive/constructors-typed-values",
              "classes-and-apis/data/data-primitive/leaf-properties-state",
              "classes-and-apis/data/data-primitive/recursive-children",
              "classes-and-apis/data/data-primitive/media-content-types",
              "classes-and-apis/data/data-primitive/context-propagation",
              "classes-and-apis/data/data-primitive/acknowledgement-responses"
            ]
          },
          {
            "type": "category",
            "label": "Graph Operations",
            "link": {
              "type": "doc",
              "id": "classes-and-apis/data/graph-operations"
            },
            "items": [
              "classes-and-apis/data/graph-operations/leaf-retrieval-id",
              "classes-and-apis/data/graph-operations/leaf-retrieval-value",
              "classes-and-apis/data/graph-operations/leaf-retrieval-type",
              "classes-and-apis/data/graph-operations/leaf-copying",
              "classes-and-apis/data/graph-operations/deep-cloning",
              "classes-and-apis/data/graph-operations/context-propagation"
            ]
          },
          {
            "type": "category",
            "label": "Data-Naive CRUD",
            "link": {
              "type": "doc",
              "id": "classes-and-apis/data/data-naive-crud"
            },
            "items": [
              "classes-and-apis/data/data-naive-crud/pattern-based-read",
              "classes-and-apis/data/data-naive-crud/data-merging",
              "classes-and-apis/data/data-naive-crud/recursive-removal"
            ]
          },
          {
            "type": "category",
            "label": "Table CRUD",
            "link": {
              "type": "doc",
              "id": "classes-and-apis/data/table-crud"
            },
            "items": [
              {
                "type": "category",
                "label": "MSUO-Table",
                "link": {
                  "type": "doc",
                  "id": "classes-and-apis/data/table-crud/msuo-table"
                },
                "items": [
                  "classes-and-apis/data/table-crud/msuo-table/child-management",
                  "classes-and-apis/data/table-crud/msuo-table/sorting",
                  "classes-and-apis/data/table-crud/msuo-table/row-operations",
                  "classes-and-apis/data/table-crud/msuo-table/column-operations",
                  "classes-and-apis/data/table-crud/msuo-table/cell-operations",
                  "classes-and-apis/data/table-crud/msuo-table/conditional-operations",
                  "classes-and-apis/data/table-crud/msuo-table/aggregation",
                  "classes-and-apis/data/table-crud/msuo-table/expression-evaluation"
                ]
              }
            ]
          },
          {
            "type": "category",
            "label": "Arithmetic & Evaluation",
            "link": {
              "type": "doc",
              "id": "classes-and-apis/data/arithmetic-evaluation"
            },
            "items": [
              "classes-and-apis/data/arithmetic-evaluation/dup-arithmetic",
              "classes-and-apis/data/arithmetic-evaluation/arithmetic-filters",
              "classes-and-apis/data/arithmetic-evaluation/expression-evaluation",
              "classes-and-apis/data/arithmetic-evaluation/column-evaluation"
            ]
          }
        ]
      },
      "classes-and-apis/metadata",
      "classes-and-apis/logicpool",
      "classes-and-apis/logicnode",
      {
        "type": "category",
        "label": "Persistence",
        "link": {
          "type": "doc",
          "id": "classes-and-apis/persistence"
        },
        "items": [
          "classes-and-apis/persistence/write",
          "classes-and-apis/persistence/overwrite",
          "classes-and-apis/persistence/read",
          "classes-and-apis/persistence/remove"
        ]
      }
    ]
  },
  {
    "type": "category",
    "label": "Additional Capabilities",
    "link": {
      "type": "doc",
      "id": "additional-capabilities"
    },
    "items": [
      "additional-capabilities/offline-first-persistence",
      "additional-capabilities/dns-assignment",
      "additional-capabilities/watchdog-gitengine"
    ]
  }
] };
