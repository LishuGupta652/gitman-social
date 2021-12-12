#include<stdio.h>
#include<conio.h>
#include<stdlib.h>
#define max 100
typedef struct QFS
{
	int R,F;
	int data[max];
}QFS;
typedef struct QFN
{
	int R2,F2;
	char data2[max];
}QFN;
void initialise(QFS *p , QFN *p2);
int empty(QFS *p, QFN *p2);
int full(QFN *p2,QFS *p);
void enqueue(QFS *p,int x);
int dequeue(QFS *p);
void print(QFS *p,QFN *p2);
//void print2(QFN *p2,QFS *p);
//void getNames(QFN *p2 , QFS *p,char y[]);
void getScore(QFN *p2,QFS *p);

void enqueue2(QFN *p2,char y);
int dequeue2(QFN *p2);
//void print3(char y[]);
//void print2(QFN *p2);

int main()
{
	QFS q;
	QFN q2;
	int x,i,j,ch;
	char y[90];
//	clrscr();
	initialise(&q,&q2);
	printf("\n\n\n");
	printf("\t\t");
	printf("-------------Cricket Score Sheet----------------");



	do
	{

	printf("\t\t\t\t\t 1 : Enter names of players \t \n \t\t\t 2 : Enter score of each player \t \n \t\t\t 3 : Display final score sheet \t \n ");
   printf("\t\t\t Enter 4 to exit\t\n\t");
	printf("\t\t Enter choice ");


		scanf("%d",&ch);
		switch(ch)
		{
			case 1: printf("\t\t enter 10 names \n");
					 for(i=0;i<10;i++)
					{
						scanf("%s",y[i]);
					}
					break;
			case 2: getScore(&q2,&q);
					break;
			case 3: for(i=0;i<10;i++)
					{
						printf("%s \t",y[i]);
					}
					print(&q,&q2);
					break;

			default : printf("Program terminated");
		}
	}while(ch!=4);

	return 0;//getch();
}






void getScore(QFN *p2,QFS *p)
{
	int i,x;
	for(i=1;i<=10;i++)
	{
		scanf("%d",&x);
		if(!full(p2,p))
			enqueue(p,x);
		else
		{
			printf("queue is full");
			exit(0);
		}

	}
}


void initialise( QFS *p, QFN *p2)
{
	p->R=-1;
	p->F=-1;
	p2->R2=-1;
	p2->F2=-1;
}

int empty(QFS *p ,QFN *p2)
{
	if(p->R==-1 && p2->R2==-1)
		return(1);
	return(0);
}

int full(QFN *p2 , QFS *p)
{
	if(p->R==max-1 && p2->R2==max-1 )
		return(1);
	return(0);
}

void enqueue(QFS *p,int x)
{
	if(p->R==-1)
	{
		p->R=p->F=0;
		p->data[p->R]=x;
	}
	else
	{
		p->R=p->R+1;
		p->data[p->R]=x;
	}
}

int dequeue(QFS *p)
{
	int x;
	x=p->data[p->F];
	if(p->R==p->F)
	{
		p->R=-1;
		p->F=-1;
	}
	else
	{
		p->F=p->F+1;
	}
	return(x);
}
void print(QFS *p , QFN *p2)
{
	int i,j;

	if(!empty(p,p2))
	{
		printf("\n");
		for(i=p->F;i<=p->R;i++)
		{
			printf("\t %d ",p->data[i]);
		}

		printf("\n");

 
	}
}