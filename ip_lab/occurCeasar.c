#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct node_t {
    char *str;          /* encrypted string */
    int occur;              /* occurrencies */
    struct node_t *next;
} node_t;

void insert_start(node_t **, char *);
void print_list(node_t *);
int in_list(node_t *, char *);
void decrypt_list(node_t *);
void free_list(node_t *);


/* INPUT:
SX]]OH XLI UQNXKPI JSV EQPITCVU JSV SX]]OH XLI EQPITCVU JSV SX]]OH XLI JSV XLI UQNXKPI
*/

int main(int argc, char **argv) {
    if (argc == 1) {
        fprintf(stderr, "Usage: %s enc1 enc2 ... encN\n", argv[0]);
        return -1;
    }

    int i;
    node_t *list = NULL;
    for (i = 1 ; i < argc ; i++) {
        if (!in_list(list, argv[i])) {
            insert_start(&list, argv[i]);
        }
    }

    print_list(list);
    decrypt_list(list);

    free_list(list);
    return 0;
}

void insert_start(node_t **list, char* str) {
    node_t *node = (node_t *) malloc(sizeof(node_t));
    node->str = (char *) malloc((strlen(str)+1) * sizeof(char));
    strcpy(node->str, str);
    node->occur = 1;
    node->next = *list;
    *list = node;
}

void print_list(node_t *list) {
    while (list != NULL) {
        printf("[%s, %d] --> ", list->str, list->occur);
        list = list->next;
    }
    printf("X\n");
}


int in_list(node_t *list, char *str) {
    /* 
    I ...
    */
}

void decrypt_list(node_t *list) {
    /* 
    II ...
    */
}

void free_list(node_t *list) {
    /* 
    III ...
    */
}
