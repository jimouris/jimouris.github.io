#include <stdio.h>

int main(void) {
    char ch = getchar();
    while (ch != EOF) {
        int score = 0;
        int symbol = 0, numeric = 0, lowercase = 0, capital = 0, length = 0;
        while (ch != EOF && ch != '\n') {
            putchar(ch);

            length++;
            if (ch == '!' || ch == '@' || ch == '#') {
                if (!symbol) {
                    score++;
                    symbol = 1;
                }
            } else if (ch >= 'A' && ch <= 'Z') {
                if (!capital) {
                    score++;
                    capital = 1;
                }
            } else if (ch >= 'a' && ch <= 'z') {
                if (!lowercase) {
                    score++;
                    lowercase = 1;
                }
            } else if (ch >= '0' && ch <= '9') {
                if (!numeric) {
                    score++;
                    numeric = 1;
                }
            }

            ch = getchar();
        }
        if (length >= 8) score++;

        printf("\nScore %d/5\n\n", score);
        ch = getchar();
    }

    return 0;
}
